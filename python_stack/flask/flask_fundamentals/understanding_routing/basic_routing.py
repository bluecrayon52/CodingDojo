from flask import Flask 

app = Flask(__name__)

# localhost:5000/ - have it say "Hello World!"
@app.route('/')
def hello_world():
    return '<h1>Hello World!</h1>'

# localhost:5000/dojo - have it say "Dojo!"
@app.route('/dojo')
def hello_dojo():
    return '<h1>Hello Dojo!</h1>'

# Create one url pattern and function that can handle the following examples:
# localhost:5000/say/flask - have it say "Hi Flask!"
# localhost:5000/say/michael - have it say "Hi Michael!"
# localhost:5000/say/john - have it say "Hi John!"
@app.route('/say/<name>')
def hi_name(name):
    return f'<h1>Hi {name.capitalize()}!</h1>'

# Create one url pattern and function that can handle the following examples (HINT: int() will come in handy! For example int("35") returns 35):
# localhost:5000/repeat/35/hello - have it say "hello" 35 times
# localhost:5000/repeat/80/bye - have it say "bye" 80 times
# localhost:5000/repeat/99/dogs - have it say "dogs" 99 times
@app.route('/repeat/<number>/<word>')
def repeat_word(number, word):
    resp = "<ol>"
    for i in range(int(number)):
        resp+= f"<li>{word}</li>"
    resp+="</ol>"
    return resp

if __name__ == "__main__":
    app.run(debug=True)
