import os
from dotenv import load_dotenv
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from enum import Enum

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
db = SQLAlchemy(app)

# vars
class ActiveScreen (Enum):
    DASHBOARD = 1
    EXPENSES = 2
    SETTINGS = 3

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', active_screen=ActiveScreen.DASHBOARD.value)

@app.route('/expenses', methods=['GET', 'POST'])
def expenses():
    try: 
        if request.method == 'POST':
            total_expense = float(request.form['expense'])
            # TODO: Implement expense computations
            return render_template('expenses.html', active_screen=ActiveScreen.EXPENSES.value, expense=total_expense)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        # You can also log the error using a logging library
    
    # Add a default return statement if the request method is 'GET'
    return render_template('expenses.html', active_screen=ActiveScreen.EXPENSES.value)

@app.route('/settings')
def settings():
    return render_template('settings.html', active_screen=ActiveScreen.SETTINGS.value)

@app.route('/result')
def result():
    return render_template('result.html')

port = os.getenv('PORT')

if __name__ == '__main__':
    app.run(port=port)
