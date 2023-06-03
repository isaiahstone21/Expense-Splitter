import os
from dotenv import load_dotenv
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
db = SQLAlchemy(app)

#vars
active_screen = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    active_screen = 1
    return render_template('dashboard.html', active_screen=active_screen)

@app.route('/expenses')
def expenses():
    active_screen = 2
    return render_template('expenses.html', active_screen=active_screen)

@app.route('/settings')
def settings():
    active_screen = 3
    return render_template('settings.html', active_screen=active_screen)

port = os.getenv('PORT')

if __name__ == '__main__':
    app.run(port=port)
