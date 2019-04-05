from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'rfro4jr5g6oerv3on3roin'

@app.route('/')
def index():
    if 'increment' not in session:
        session['increment'] = 1

    if 'count' in session:
        session['count'] += session['increment']
    else:
        session['count'] = session['increment']
    
    session['increment'] = 1

    return render_template("index.html", count = session['count'])
            
@app.route('/destroy_session', methods=['POST'])
def destroy_session():
    session.pop('count')	
    return redirect("/")

@app.route('/custom_count', methods=['POST'])
def custom_count():
    session['increment'] = int(request.form['custom_increment'])
    return redirect("/")
    
@app.route('/double_count', methods=['POST'])
def double_count():
    session['increment'] = 2
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
