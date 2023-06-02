import os
from dotenv import load_dotenv
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = ''

@app.route('/')
def index():
    return render_template('index.html')

port = os.getenv('PORT')

if __name__ == '__main__':
    app.run(port=port)
