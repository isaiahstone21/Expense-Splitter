import os
from dotenv import load_dotenv
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import expenses

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
db = SQLAlchemy(app)

# vars
active_screen = 0
person_count = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    active_screen = 1
    return render_template('dashboard.html', active_screen=active_screen)

@app.route('/expenses', methods=['GET', 'POST'])
def expenses():
    active_screen = 2
    person_count = 2
    try:
        if request.method == 'POST':
            total_expense = float(request.form['expense'])
            # TODO: Implement expense computations
            if "add-person" in request.form['expense']:
                print('clicked')
                return render_template('expenses.html', active_screen=active_screen, person_count=person_count, expense=total_expense)
        return render_template('expenses.html', active_screen=active_screen, person_count=person_count)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        # You can also log the error using a logging library
    
    # Add a default return statement if the request method is 'GET'
    return render_template('expenses.html', active_screen=active_screen, person_count=person_count)

@app.route('/settings')
def settings():
    active_screen = 3
    return render_template('settings.html', active_screen=active_screen)

port = os.getenv('PORT')

if __name__ == '__main__':
    app.run(port=port)
