from flask import Flask, render_template, request, redirect
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
app = Flask(__name__)
@app.route("/")
def index():
    # call the function, passing in the name of our db
    mysql = connectToMySQL('pets')
     # call the query_db function, pass in the query as a string
    pets = mysql.query_db('SELECT * FROM pets;')
    print(pets)
    return render_template("index.html", pets=pets)

@app.route("/create_pet", methods=["POST"])
def add_pet_to_db():
    mysql = connectToMySQL('pets')

    query ="INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(name)s, %(type)s, Now(), Now());"

    data = {
        'name': request.form['name'],
        'type': request.form['type']
    }

    new_pet_id = mysql.query_db(query, data)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
