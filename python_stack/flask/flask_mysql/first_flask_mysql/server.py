from flask import Flask, render_template, request, redirect, session, flash
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route("/")
def index():
    # call the function, passing in the name of our db
    mysql = connectToMySQL('first_flask')
     # call the query_db function, pass in the query as a string
    friends = mysql.query_db('SELECT * FROM friends;')
    print(friends)
    return render_template("index.html", friends=friends)

@app.route('/create_friend', methods=['POST'])
def add_friend_to_db():
    is_valid = True
    if len(request.form['fname']) < 1:
    	is_valid = False
    	flash("Please enter a first name")
    if len(request.form['lname']) < 1:
    	is_valid = False
    	flash("Please enter a last name")
    if len(request.form['occ']) < 2:
    	is_valid = False
    	flash("Occupation should be at least 2 characters")
    
    if not is_valid:
        return redirect("/")
    else:
    	# add user to database
        mysql = connectToMySQL('first_flask')
        query ="INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(occup)s, Now(), Now());"

        data = {
            'fn': request.form['fname'],
            'ln': request.form['lname'],
            'occup': request.form['occ']
        }

        new_friend_id = mysql.query_db(query, data)
        flash("Friend successfully added!")
        return redirect("/")    # eventually we may have a different success route


if __name__ == "__main__":
    app.run(debug=True)
