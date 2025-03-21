from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:dummypass@localhost/testdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cardnum = db.Column(db.Integer, unique=True, nullable=False)
    pin = db.Column(db.Integer, nullable=False)
    income = db.Column(db.Integer)
    expences = db.Column(db.Integer)
    balance = db.Column(db.Integer)

with app.app_context():
    db.create_all()



@app.route('/homepage')
def homepage():
    return render_template('index.html')

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    cardnum = data.get('uid')
    pin = data.get('pin')
    new_user = User(cardnum=cardnum, pin=pin)
    try:
        db.session.add(new_user)
        db.session.commit()
        return f'User with creditentials: cardnumber: {cardnum}, pin: {pin}; was sussesfully added to the database'
    except:
        return 'Sorry, there was an error in adding user to the database'

@app.route('/balance/<id>')
def balance(id):
    user = User.query.filter_by(id=id).first()
    balance = user.get('balance')
    return balance

@app.route('/cardnum', methods=['GET', 'POST'])
def card():
    data = request.get_json()
    num = data.get('uid')
    
    return f'Recived data (card number): {num}'

@app.route('/ai_retr/<user_id>')
def retriver(user_id):
    user = User.query.filter_by(id=user_id).first()
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5500, debug=True)

