from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play/')
@app.route('/play/<times>/')
@app.route('/play/<times>/<color>/')
def render_boxes(times=3, color='lightskyblue'):
    return render_template('boxes.html', num_times=int(times), back_color=color)

if __name__ == '__main__':
    app.run(debug=True)
