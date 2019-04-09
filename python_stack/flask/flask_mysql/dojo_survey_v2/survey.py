from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route('/')
def index():
	mysql = connectToMySQL('dojo_survey')
	locations = mysql.query_db('SELECT id, location FROM locations;')
	mysql = connectToMySQL('dojo_survey')
	languages = mysql.query_db('SELECT id, language FROM languages;')
	return render_template("index.html", locations= locations, languages = languages)
            
@app.route('/insert_user', methods=['POST'])
def create():

	is_valid = True
	if len(request.form['name']) < 1:
		is_valid = False
		flash("Please enter a name")
	if len(request.form['location']) < 1:
		is_valid = False
		flash("Please select a location")
	if len(request.form['language']) < 1:
		is_valid = False
		flash("please select a language")
	if len(request.form['comment']) > 120:
		is_valid = False
		flash("Your comment should not exceed 120 characters")
	
	if not is_valid:
		return redirect("/")
	else:
		mysql = connectToMySQL('dojo_survey')
		query ="INSERT INTO users (name, location_id, language_id, comment, created_at, updated_at) VALUES (%(name)s, %(loc)s, %(lang)s, %(com)s, Now(), Now());"
		data = {
			'name': request.form['name'],
			'loc': request.form['location'],
			'lang': request.form['language'],
			'com': request.form['comment'],
		}

		new_user_id = mysql.query_db(query, data)
		print('NEW USER ID------: ',new_user_id)
		return redirect(f"/user_detail/{new_user_id}")

@app.route("/user_detail/<id>", methods=['GET'])
def show_user(id):
	mysql = connectToMySQL('dojo_survey')
	query ="""SELECT users.id, users.name, users.comment, locations.location, languages.language FROM users 
		JOIN locations ON users.location_id = locations.id 
		JOIN languages ON users.language_id = languages.id
		WHERE users.id=%(id)s"""

	data = {'id': id}
	user = mysql.query_db(query, data)[0]
	mysql = connectToMySQL('dojo_survey')

	print('USER-------------:',user)
	return render_template("show.html", user = user)

if __name__ == "__main__":
        app.run(debug=True)
