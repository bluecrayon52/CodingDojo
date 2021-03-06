from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt  
import re
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'
bcrypt = Bcrypt(app)

# helper function for message timestamp difference conversion
def get_readable_time(messages):
	for msg in messages:
		dif = datetime.now() - msg['created_at']
		# print('dif: ', dif)
		seconds = dif.total_seconds()
		# print('seconds: ', seconds)
		if int(seconds/31540000) > 0:
			msg['created_at'] = f'{int(seconds/31540000)} years ago'
			# print('years:', int(seconds/31540000))
		elif int(seconds/2628000) > 0:
			msg['created_at'] = f'{int(seconds/2628000)} months ago'
			# print('months: ', int(seconds/2628000))
		elif int(seconds/604800) > 0:
			msg['created_at'] = f'{int(seconds/604800)} weeks ago'
			# print('weeks: ', int(seconds/604800))
		elif int(seconds/86400) > 0:
			msg['created_at'] = f'{int(seconds/86400)} days ago'
			# print('days: ', int(seconds/86400))
		elif int(seconds/3600) > 0:
			msg['created_at'] = f'{int(seconds/3600)} hours ago'
			# print('hours: ', int(seconds/3600))
		elif int(seconds/60) > 0:
			msg['created_at'] = f'{int(seconds/60)} minutes ago'
			# print('minutes: ', int(seconds/60))
		elif int(seconds) > 0:
			msg['created_at'] = f'{int(seconds)} seconds ago'
		else:
			msg['created_at'] = 'just now'	

	return messages

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
	NAME_REGEX = re.compile(r'^[A-Za-z]{2,45}$')

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
		mysql = connectToMySQL('private_wall')
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
			mysql = connectToMySQL('private_wall')
			query ="INSERT INTO  users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(em)s, %(pw)s, Now(), Now());"
			data = {
					'fn': request.form['first_name'],
					'ln': request.form['last_name'],
					'em': request.form['email'],
					'pw': pass_hash
				}

			new_user_id = mysql.query_db(query, data)
			session['user_id'] = new_user_id
			return redirect('/wall')

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
		mysql = connectToMySQL('private_wall')
		query ="SELECT * FROM users WHERE email=%(email)s;"
		data = {'email': request.form['email']}
		user = mysql.query_db(query, data)

		if user: 
			# validate hash of password 
			if bcrypt.check_password_hash(user[0]['password'], request.form['password']):
				# store user id in session 
				session['user_id'] = user[0]['id']
				return redirect('/wall')

		flash('You could not be logged in', 'login_main')
		return redirect('/')

@app.route('/wall', methods=['GET']) 
def show_wall(): 
	# use user id in session to select user info from DB
	if 'user_id' not in session:
		return redirect('/')

	# query for the logged in user 
	mysql = connectToMySQL('private_wall')
	query ="SELECT * FROM users WHERE id=%(id)s;"
	data ={'id' : session['user_id']}
	user = mysql.query_db(query, data)[0]

	# query for all other users
	mysql = connectToMySQL('private_wall')
	query ="SELECT * FROM users WHERE id!=%(id)s;"
	session['other_users'] = mysql.query_db(query, data)
	# print('----------->OTHER_USERS: ', other_users)

	# query for all messages, joined  with users
	mysql = connectToMySQL('private_wall')
	query ="""SELECT messages.id, messages.content, messages.created_at, users.first_name, users.last_name 
	FROM messages 
	JOIN users ON users.id = messages.from_id
	WHERE messages.to_id = %(user)s;"""
	data = {'user': session['user_id']}
	messages = mysql.query_db(query, data)
	# print('----------->MESSAGES: ', messages)

	# query for count of messages sent by current user
	mysql = connectToMySQL('private_wall')
	query ="""SELECT messages.id FROM messages WHERE from_id=%(id)s"""
	data = {'id': session['user_id']}
	msgs_for_count = mysql.query_db(query, data)
	session['msgs_count'] = msgs_count = len(msgs_for_count)
	# print(session['msgs_count'])
	# print(msgs_count)
	if msgs_count > 0:
		flash(f'You have sent {msgs_count} messages so far', 'messages_count')

	# convert created_at to readable difference 
	messages = get_readable_time(messages)
	return render_template('wall.html', user = user, other_users = session['other_users'], messages = messages)

@app.route('/messages/new', methods=['POST'])
def new_message():
	is_valid = True
	# validate of message 
	if len(request.form['content']) < 5:
		cont_error_msg = 'Message must be at least 5 characters long'
		cont_valid = 'is-invalid'
		is_valid = False

	else:
		cont_error_msg = ''  
		cont_valid = 'is-valid'

	cont_value = request.form['content']
	
	# validate recipient 
	if len(request.form['receiver']) < 1:
		rec_error_msg = 'Please select a recipient'
		rec_valid = 'is-invalid'
		rec_sel = 0
		is_valid = False
	
	else: 
		rec_error_msg = ''
		rec_valid = 'is-valid'
		rec_sel = request.form['receiver']

	if not is_valid:
		return render_template('partials/msg_res.html', is_valid=is_valid, other_users = session['other_users'], cont_error_msg = cont_error_msg,  
		rec_error_msg = rec_error_msg, cont_valid = cont_valid, rec_valid = rec_valid, cont_value = cont_value, rec_sel = rec_sel)
	
	else:
		# insert message into DB
		mysql = connectToMySQL('private_wall')
		query ="""INSERT INTO messages (content, created_at, updated_at, from_id, to_id) 
		VALUES(%(cont)s, Now(), Now(), %(from)s, %(to)s);"""
		data ={'cont': request.form['content'],
				'from': session['user_id'],
				'to': request.form['receiver']
			}
		new_msg_id = mysql.query_db(query, data)
		session['msgs_count'] = session['msgs_count'] + 1
		# print(session['msgs_count'])

		return render_template('partials/msg_res.html', is_valid=is_valid, other_users = session['other_users'], cont_error_msg = cont_error_msg,  
		rec_error_msg = rec_error_msg, cont_valid = cont_valid, rec_valid = rec_valid, cont_value = cont_value, rec_sel = rec_sel)

@app.route('/get_msg_count', methods=['GET'])
def get_msg_count():
	msgs_count = session['msgs_count']
	msg = f'You have sent {msgs_count} messages so far'
	return render_template('partials/msg_count.html', msg = msg)

@app.route('/messages/<id>/delete', methods=['GET'])
def delete_message(id):

	# check the to_id of the message 
	mysql = connectToMySQL('private_wall')
	data= {'id': id}
	query="""SELECT to_id FROM messages WHERE id=%(id)s"""
	to_id = mysql.query_db(query, data)[0]['to_id']

	if to_id != session['user_id']:
		flash('Danger, deletion not allowed', 'danger') 

	else: 
		# delete the message
		mysql = connectToMySQL('private_wall')
		query="""DELETE FROM messages WHERE id=%(id)s"""
		mysql.query_db(query, data)

	return redirect('/wall')
	
@app.route('/logout', methods=['GET'])
def logout_user():
	# clear session 
	session.clear()	
	return redirect('/')

if __name__ == "__main__":
        app.run(debug=True)