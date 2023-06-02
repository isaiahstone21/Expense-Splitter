from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', message='This is the root of the website.')

if __name__ == '__main__':
    app.run()
