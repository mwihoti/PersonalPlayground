from flask_mail import Message
from app import mail, app
from flask import render_template
from threading import Thread


def send_email(subject, sender, receipts, text_body, html_body):
    msg = Message(subject, sender=sender, receipts=receipts)
    msg.body = text_body
    msg.html = html_body
    mail.send(msg)
    
def send_password_reset_email(user):
    token = user.get_reset_password_token()
    send_email('[Microblog ] Reset Your password', sender=app.config['ADMINS'][0], 
               receipts=[user.email],
               text_body=render_template('email/reset_password.txt', user=user, token=token),
               html_body=render_template('email/reset_password.txt', user=user, token=token))
    
def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)

def send_email(subject, sender, receipts, text_body, html_body):
    msg = Message(subject, sender, recipients=receipts)
    msg.body = text_body
    msg.html = html_body
    Thread(target=send_async_email, args=(app, msg)).start()
