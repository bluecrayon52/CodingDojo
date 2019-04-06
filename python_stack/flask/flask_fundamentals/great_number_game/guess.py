from flask import Flask, render_template, request, redirect, session
import random 

app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route('/')
def index():
    if 'attempts' not in session:
         session['attempts'] = 5

    if 'random_number' not in session:
        session['random_number'] = random.randint(1, 100) 
        session['display'] = 'new'

    return render_template("index.html", attempts = session['attempts'], display= session['display'], random_number=session['random_number'])

@app.route('/check_guess', methods=['POST'])
def generate_random():
    # correct 
    if int(request.form['guess']) == session['random_number']:
        session['display'] = 'right'
    # incorrect
    else: 
        session['attempts'] -= 1

        # too high 
        if int(request.form['guess']) > session['random_number']:
            session['display'] = 'wrong_high'
        # too low
        else: 
            session['display'] = 'wrong_low'

    return redirect('/')

@app.route('/play_again', methods=['GET'])
def play_again():
    session.clear()	
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
