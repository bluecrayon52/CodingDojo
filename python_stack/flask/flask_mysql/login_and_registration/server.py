from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
import re
app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

# helper function for email form validation 
def validate_email(email):
	EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
	
	if len(email) < 1:
		flash('The email field is required', 'email')
		flash('is-invalid', 'em_valid')
		return False 

	elif not EMAIL_REGEX.match(email):
		flash('Invalid email address', 'email')
		flash('is-invalid', 'em_valid')
		return False

	flash('is-valid', 'em_valid')
	flash(email, 'em_value')
	return True

# helper function for password form validation
def validate_pass(password):
	PASS_REGEX = re.compile(r'^(?=.*[A-Z])(?=.*\d)(.{8,15})$')
	if len(password) < 1:
		flash('The password field is required', 'password')
		flash('is-invalid', 'pw_valid')
		return False 

	elif not PASS_REGEX.match(password):
		flash('Password must contain a number, a capital letter, and be between 8-15 characters', 'password')
		flash('is-invalid', 'pw_valid')
		return False

	flash('is-valid', 'pw_valid')
	return True

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@app.route('/register', methods=['POST'])
def register_user():
	is_valid = True
	NAME_REGEX = re.compile(r'^[A-Za-z]{2,50}$')

	# validate first_name
	if len(request.form['first_name']) < 1:
		flash('The first name field is required', 'first_name')
		flash('is-invalid', 'fn_valid')
		is_valid = False 

	elif not NAME_REGEX.match(request.form['first_name']):
		flash('First name must contain at least two letters and contain only letters', 'first_name')
		flash('is-invalid', 'fn_valid')
		is_valid = False
	
	else: 
		flash('is-valid', 'fn_valid')
		flash(request.form['first_name'], 'fn_value')

	# validate last_name
	if len(request.form['last_name']) < 1:
		flash('The last name field is required', 'last_name')
		flash('is-invalid', 'ln_valid')
		is_valid = False 

	elif not NAME_REGEX.match(request.form['last_name']):
		flash('Last name must contain at least two letters and contain only letters', 'last_name')
		flash('is-invalid', 'ln_valid')
		is_valid = False
	
	else: 
		flash('is-valid', 'ln_valid')
		flash(request.form['last_name'], 'ln_value')
	
	# validate email 
	if not validate_email(request.form['email']):
		is_valid = False

	# validate password
	if not validate_pass(request.form['password']):
		is_valid = False

	# validate confirm_password
	if len(request.form['confirm_password']) < 1:
		flash('The confirm password field is required', 'confirm_password')
		flash('is-invalid', 'cpw_valid')
		is_valid = False 
	
	elif request.form['confirm_password'] != request.form['password']:
		flash('Passwords must match', 'confirm_password')
		flash('is-invalid', 'cpw_valid')
		is_valid = False

	else: 
		flash('is-valid', 'cpw_valid')

	if not is_valid:
		return redirect('/')
	else:
		# attempt to retrieve user entry from DB based on email
		is_duplicate = False
		mysql = connectToMySQL('login_register')
		query ="SELECT * FROM users WHERE email=%(email)s;"
		data = {'email': request.form['email']}
		user = mysql.query_db(query, data)
		if user:
			is_duplicate = True

		if is_duplicate:
			flash('A user with this email already exists!', 'email')
			return redirect("/")
		else: 
			# hash password
			# insert into users DB 
			return redirect('/success')

@app.route('/login', methods=['POST'])
def login_user():
	is_valid = True

	# validate email 
	if not validate_email(request.form['email']):
		is_valid = False

	# validate password
	if not validate_pass(request.form['password']):
		is_valid = False 

	if not is_valid:
		return redirect('/')
	else: 
		is_pass = True
		# retrieve user entry from DB based on email 
		# validate hash of password 

		if not is_pass:
			return redirect('/')
		else: 
			# store user id in session 
			return redirect('/success')

@app.route('/success', methods=['GET']) 
def show_success(): 
	# use user id in session to select user info from DB
	user = {"first_name": "Larry"}
	return render_template('success.html', user = user)

@app.route('/logout', methods=['POST'])
def logout_user():
	# clear session 
	return redirect('/')

# @app.route('/new_email', methods=['POST'])
# def create_email():
# 	EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
# 	is_valid = True
# 	if not EMAIL_REGEX.match(request.form['email']):
# 		flash("Invalid email address!")
# 		is_valid = False 
		
# 	if not is_valid:
# 		return redirect("/")
# 	else:
# 		mysql = connectToMySQL('email_validation')
# 		query ="INSERT INTO emails (address, created_at, updated_at) VALUES (%(addr)s, Now(), Now());"
# 		data = {'addr': request.form['email']}
# 		new_email_id = mysql.query_db(query, data)
# 		flash("success")
# 		return redirect("/show_emails")

# @app.route("/show_emails", methods=['GET'])
# def show_emails():
# 	mysql = connectToMySQL('email_validation')
# 	emails = mysql.query_db("SELECT * FROM emails")
# 	return render_template("show.html", emails = emails)

# @app.route("/email/<id>/delete", methods=['GET'])
# def delete_email(id):
# 	mysql = connectToMySQL('email_validation')
# 	query ="DELETE FROM emails WHERE id=%(id)s;"
# 	data = {'id': id}
# 	mysql.query_db(query, data)
# 	return redirect("/show_emails")

if __name__ == "__main__":
        app.run(debug=True)