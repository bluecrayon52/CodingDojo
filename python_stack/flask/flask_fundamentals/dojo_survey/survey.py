from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
            
@app.route('/result', methods=['POST'])
def create():
    
    return render_template("show.html", 
        name = request.form['name'], 
        location=request.form['location'], 
        language=request.form['language'],
        experience=request.form['experience'],
        comment=request.form['comment'])

if __name__ == "__main__":
    app.run(debug=True)
