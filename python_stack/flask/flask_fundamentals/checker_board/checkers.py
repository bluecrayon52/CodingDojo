from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/<rows>/')
@app.route('/<rows>/<columns>/')
@app.route('/<rows>/<columns>/<color1>/')
@app.route('/<rows>/<columns>/<color1>/<color2>/')
def render_board(rows=8, columns=8, color1='red', color2='black'):
    return render_template('index.html', rows=int(rows), columns=int(columns), color1=color1, color2=color2)

if __name__ == '__main__':
    app.run(debug=True)
