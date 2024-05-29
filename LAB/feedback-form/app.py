import re 
from flask import Flask, render_template, request, redirect, jsonify, url_for
import mysql.connector

app = Flask(__name__)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',
    'database': 'feedback_db',
}

# Connect to the database
mysql = mysql.connector.connect(**db_config)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        # Save feedback to database
        cursor = mysql.cursor()
        cursor.execute("INSERT INTO feedback (name, email, message) VALUES (%s, %s, %s)", (name, email, message))
        mysql.commit()
        cursor.close()
        
        return redirect('/')
    else:
        cursor = mysql.cursor()
        cursor.execute("SELECT * FROM feedback")
        feedback = cursor.fetchall()
        cursor.close()
        
        return render_template('index.html', feedback=feedback)

if __name__ == '__main__':
    app.run(debug=True)

//