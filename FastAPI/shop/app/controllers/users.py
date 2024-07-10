from models import User, db
from sqlalchemy import exc

def get_users():
    users = User.query.all()
    return users

def get_user(id):
    user = User.query.get(id)
    return user

def add_user(username, password, email, role):
    try:
        newUSer = User(
            username = username,
            password = password,
            email = email,
            role = role
        )
        db.session.add(newUSer)
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False
    
def update_user(id, username, password, email, role):
    try:
        user = User.query.get(id)
        user.username = username
        user.password = password
        user.email = email
        user.role = role
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False

def delete_user(id):
    try:
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False

def get_user_by_username(username):
    user = User.query.filter_by(username = username).first()
    return user
