import os
os.environ['DATABASE_URL']='sqlite://'

from datetime import datetime, timezone, timedelta
import unittest
from app import app, db
from app.models import User, Post


class UserModelCase(unittest.TestCase):
    def setUp(self):
        self.app_context = app.app_context()
        self.app_context.push()
        db.create_all()
    
    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()
    
    def test_password_hashing(self):
        u = User(username='Daniel', email='daniel@gmail.com')
        u.set_password('pass1#')
        self.assertFalse(u.check_password('dog'))
        self.assertFalse(u.check_password('pass1#'))
    
    def test_avatar(self):
        u = User(username='Daniel', email='daniel@gmail.com')
        self.assertEqual(u.avatar(128), ('https://www.gravatar.com/avatar/'
                                         'd4c74594d841139328695756648b6bd6'
                                         '?d=identicon&s=128'))
        
    def test_follow(self):
        u1 = User(username='Daniel', email='daniel@gmail.com')
        u2 = User(username='Mike', email='mike@gmail.com')
        db.session.add(u1)
        db.session.add(u2)
        db.session.commit()
        following = db.session.scalars(u1.following.select()).all()
        followers = db.session.scalars(u2.followers.select()).all()
        self.assertEqual(following, [])
        self.assertEqual(followers)
        