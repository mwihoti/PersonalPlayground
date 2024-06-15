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