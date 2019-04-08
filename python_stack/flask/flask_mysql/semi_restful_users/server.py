from flask import Flask, render_template, request, redirect
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
app = Flask(__name__)
@app.route("/users", methods=['GET'])
def index():
    # call the function, passing in the name of our db
    mysql = connectToMySQL('users')
     # call the query_db function, pass in the query as a string
    users = mysql.query_db('SELECT * FROM friends;')
    return render_template("index.html", users=users)

@app.route("/users/new", methods=['GET'])
def show_new_user_form():
    return render_template("new_user.html")

@app.route("/users/create", methods=["POST"])
def insert_user_to_db():
    mysql = connectToMySQL('users')
    query ="INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (%(fname)s, %(lname)s, %(email)s, Now(), Now());"
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email']
    }

    new_user_id = mysql.query_db(query, data)
    print(new_user_id)
    return redirect(f"/users/{new_user_id}")

@app.route("/users/<id>", methods=['GET'])
def show_user_info(id):
    mysql = connectToMySQL('users')
    query = 'SELECT * FROM friends WHERE id=%(id)s'
    data = {'id': id}
    user = mysql.query_db(query, data)[0]
    print(user)
    return render_template("user_info.html", user = user)

@app.route("/users/<id>/edit", methods=['GET'])
def show_edit_user_form(id):
    mysql = connectToMySQL('users')
    query = 'SELECT * FROM friends WHERE id=%(id)s'
    data = {'id': id}
    user = mysql.query_db(query, data)[0]
    print(user)
    return render_template("edit_user.html", user = user)

@app.route("/users/<id>/update", methods=["POST"])
def update_friend_to_db(id):
    mysql = connectToMySQL('users')
    query ="UPDATE friends SET first_name=%(fname)s, last_name=%(lname)s, email=%(email)s, updated_at= Now() WHERE id=%(id)s;"
    data = {
        'id': id,
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email']
    }

    mysql.query_db(query, data)

    return redirect(f"/users/{id}")

@app.route("/users/<id>/destroy", methods=['GET'])
def delete_user(id):
    mysql = connectToMySQL('users')
    query = "DELETE FROM friends WHERE id=%(id)s"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect("/users")

if __name__ == "__main__":
    app.run(debug=True)
