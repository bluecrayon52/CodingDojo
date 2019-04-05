from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
            
@app.route('/result/', methods=['POST'])
def create():
    print("Got Post Info")
    print(request.form)
    
    return render_template("show.html", 
        name = request.form['name'], 
        location=request.form('location'), 
        language=request.form('language'), 
        comment=request.form('comment'))

if __name__ == "__main__":
    app.run(debug=True)



# http://localhost:5000 - have this display a nice looking HTML form.  The form should be submitted to '/result'
# http://localhost:5000/result - have this display a html with the information that was submitted by POST