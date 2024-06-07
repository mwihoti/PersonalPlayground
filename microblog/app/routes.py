from app import app
from flask import render_template, redirect, flash, url_for
from app.forms import LoginForm
from app.models import User
from app import db
from flask_login import current_user, login_user
import sqlachemy as sa


@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Mwihoti'}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    

    return render_template('index.html', title='Home', user=user, posts=posts)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = db.session.scalar(
            sa.select(User).where(User.username == form.username.data))
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or passworrd')
            return redirect(url_for('login'))
        login_user (user, remember=form.remember_me.data)
        return redirect (url_for('index'))
    return render_template('login.html', title='Sign In', form=form)

@app.route('/logout')