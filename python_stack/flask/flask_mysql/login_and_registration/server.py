from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt  
import re

app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'
bcrypt = Bcrypt(app)

# helper function for email form validation 
def validate_email(email, category, valid, value):
	EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
	
	if len(email) < 1:
		flash('The email field is required', category)
		flash('is-invalid', valid)
		return False 

	elif not EMAIL_REGEX.match(email):
		flash('Invalid email address', category)
		flash('is-invalid', valid)
		return False

	flash(email, value)
	return True

# helper function for password form validation
def validate_pass(password, category, valid):
	PASS_REGEX = re.compile(r'^(?=.*[A-Z])(?=.*\d)(.{8,15})$')
	if len(password) < 1:
		flash('The password field is required', category)
		flash('is-invalid', valid)
		return False 

	elif not PASS_REGEX.match(password):
		flash('Password must contain a number, a capital letter, and be between 8-15 characters', category)
		flash('is-invalid', valid)
		return False

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
	if not validate_email(request.form['email'], 'email', 'em_valid', 'em_value'):
		is_valid = False

	# validate password
	if not validate_pass(request.form['password'], 'password', 'pw_valid'):
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

	if not is_valid:
		return redirect('/')

	else:
		# attempt to retrieve user entry from DB based on email
		mysql = connectToMySQL('login_register')
		query ="SELECT * FROM users WHERE email=%(email)s;"
		data = {'email': request.form['email']}
		user = mysql.query_db(query, data)
		if user:
			flash('A user with this email already exists!', 'email')
			flash('is-invalid', 'em_valid')
			return redirect("/")

		else: 
			flash('is-valid', 'em_valid')
			# hash password
			pass_hash = bcrypt.generate_password_hash(request.form['password'])

			# insert into users DB 
			mysql = connectToMySQL('login_register')
			query ="INSERT INTO  users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(em)s, %(pw)s, Now(), Now());"
			data = {
					'fn': request.form['first_name'],
					'ln': request.form['last_name'],
					'em': request.form['email'],
					'pw': pass_hash
				}

			new_user_id = mysql.query_db(query, data)
			session['user_id'] = new_user_id
			return redirect('/success')

@app.route('/login', methods=['POST'])
def login_user():
	is_valid = True

	# validate email 
	if not validate_email(request.form['email'], 'login_email', 'login_em_valid', 'login_em_value'):
		is_valid = False

	# validate password
	if not validate_pass(request.form['password'], 'login_password', 'login_pw_valid'):
		is_valid = False 

	if not is_valid:
		return redirect('/')

	else: 
		# retrieve user entry from DB based on email 
		mysql = connectToMySQL('login_register')
		query ="SELECT * FROM users WHERE email=%(email)s;"
		data = {'email': request.form['email']}
		user = mysql.query_db(query, data)

		if user: 
			# validate hash of password 
			if bcrypt.check_password_hash(user[0]['password'], request.form['password']):
				# store user id in session 
				session['user_id'] = user[0]['id']
				return redirect('/success')

		flash('You could not be logged in', 'login_main')
		return redirect('/')

@app.route('/success', methods=['GET']) 
def show_success(): 
	# use user id in session to select user info from DB
	if 'user_id' not in session:
		return redirect('/')

	mysql = connectToMySQL('login_register')
	query ="SELECT * FROM users WHERE id=%(id)s;"
	data ={'id' : session['user_id']}
	user = mysql.query_db(query, data)[0]
	return render_template('success.html', user = user)

@app.route('/logout', methods=['GET'])
def logout_user():
	# clear session 
	session.clear()	
	return redirect('/')

if __name__ == "__main__":
        app.run(debug=True)