import os
from flask import Flask, render_template, request
from enum import Enum

app = Flask(__name__)
app.config['DEBUG'] = True


class ActiveScreen (Enum):
    DASHBOARD = 1
    EXPENSES = 2

@app.route('/')
def index():
    return render_template('dashboard.html', active_screen=ActiveScreen.DASHBOARD.value)

@app.route('/expenses', methods=['GET', 'POST'])
def expenses():
    try: 
        if request.method == 'POST':
            total_expense = float(request.form['expense'])
            return render_template('expenses.html', active_screen=ActiveScreen.EXPENSES.value, expense=total_expense)
    except Exception as e:
        print(f"An error occurred: {str(e)}")
    return render_template('expenses.html', active_screen=ActiveScreen.EXPENSES.value)

@app.route('/result')
def result():
    return render_template('result.html')

port = os.getenv('PORT')

if __name__ == '__main__':
    app.run(port=5000)
