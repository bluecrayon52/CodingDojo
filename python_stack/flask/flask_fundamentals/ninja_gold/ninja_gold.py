from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route('/')
def index():
    if 'gold' not in session: 
        session['gold'] = 0
        session['messages'] = []
    
    return render_template("index.html", gold = session['gold'], messages = session['messages'])

@app.route('/process_money', methods=['POST'])
def process_money():
    place = request.form['place']
    if place == 'farm':
        amount = random.randint(10, 20) 
        session['gold'] += amount
        session['messages'].insert(0, {
            'message': f'Earned {amount} golds on the farm! ({datetime.now()})',
            'gain': True
        })
        session['gain'] = True 
    elif place == 'cave':
        amount = random.randint(5, 10)
        session['gold'] += amount
        session['messages'].insert(0, {
            'message': f'Found {amount} golds in the cave! ({datetime.now()})',
            'gain': True
        })
    elif place == 'house':
        amount = random.randint(2, 5) 
        session['gold'] += amount
        session['messages'].insert(0, {
            'message': f'Earned {amount} golds from home! ({datetime.now()})',
            'gain': True
        })
    else:
        amount = random.randint(-50, 50)
        session['gold'] += amount
        if amount > 0:
            session['messages'].insert(0, {
            'message': f'Won {amount} golds from the casino! ({datetime.now()})',
            'gain': True
            })
        else: 
            session['messages'].insert(0, {
            'message': f'Lost {abs(amount)} golds from the casino! ({datetime.now()})',
            'gain': False
            })
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()	
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
