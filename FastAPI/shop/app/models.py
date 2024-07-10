from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), nullable = False)
    description = db.Column(db.String(100), nullable = False)
    price = db.Column(db.Float, nullable = False)
    category = db.Column(db.String(50), nullable = False)
    image = db.Column(db.String(50), nullable = False)
    
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), nullable = False)
    password = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(50), nullable = False )
    role = db.Column(db.String(50), nullable = False)