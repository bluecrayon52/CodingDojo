from flask import Flask, render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template('index.html', phrase="hello", times=5)   # Return the string 'Hello World!' as a response

@app.route('/testing')
def hello_Testing():
    return 'Hello Testing!'

@app.route('/<name>/')
@app.route('/<name>/<num>')
def hello_Name(name, num=1):
    return render_template('name.html', some_name= name, num_times= int(num))

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
