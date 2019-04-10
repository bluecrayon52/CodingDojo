from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route('/')
def index():
	return render_template("index.html")
            
@app.route('/new_email', methods=['POST'])
def create_email():
	EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
	is_valid = True
	if not EMAIL_REGEX.match(request.form['email']):
		flash("Invalid email address!")
		is_valid = False 
		
	if not is_valid:
		return redirect("/")
	else:
		mysql = connectToMySQL('email_validation')
		query ="INSERT INTO emails (address, created_at, updated_at) VALUES (%(addr)s, Now(), Now());"
		data = {'addr': request.form['email']}
		new_email_id = mysql.query_db(query, data)
		flash("success")
		return redirect("/show_emails")

@app.route("/show_emails", methods=['GET'])
def show_emails():
	mysql = connectToMySQL('email_validation')
	emails = mysql.query_db("SELECT * FROM emails")
	return render_template("show.html", emails = emails)

@app.route("/email/<id>/delete", methods=['GET'])
def delete_email(id):
	mysql = connectToMySQL('email_validation')
	query ="DELETE FROM emails WHERE id=%(id)s;"
	data = {'id': id}
	mysql.query_db(query, data)
	return redirect("/show_emails")

if __name__ == "__main__":
        app.run(debug=True)