from flask import Flask, request, render_template, redirect, url_for
from app.models import Product, User, db
from app.controllers.users import get_users, get_user, add_user, update_user, delete_user, get_user_by_username
from app.controllers.products import get_products, get_product, add_product, update_product, delete_product
from sqlalchemy import exc
import hashlib
from flask_login import LoginManager, login_user, current_user, logout_user, login_required
from werkzeug.utils import secure_filename
import secrets

app = Flask(__name__, template_folder = 'templates', static_folder = 'static')
app.config['SECRET_KEY'] = secrets.token_hex(16)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return User.query.get(int(user_id))


shopname = "Mwihoti"


products = [
    {
        'id': 1,
        'title': 'Big Apple',
        'description': 'A big apple',
        'price': 5,
        'category': 'Fruit',
        'image': 'bigapple.avif'
    },
    {
        'id': 2,
        'title': 'Cool Flask',
        'description': 'A flask that is cool',
        'price': 10,
        'category': 'Water Bottles',
        'image': 'coolflask.avif'
    },
    {
        'id': 3,
        'title': 'Cat Mouse',
        'description': 'A cat shaped mouse',
        'price': 15,
        'category': 'Electronics',
        'image': 'catmouse.avif'
    }
]

users = [
    {
        'id': 1,
        'username': 'admin',
        'password': '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
        'email': 'admin@stackshop.com',
        'role': 'admin'
    }
]

with app.app_context():
    db.create_all()
    try:
        for product in products:
            new_product = Product(
                id = product['id'],
                title = product['title'],
                description = product['description'],
                price = product['price'],
                category = product['category'],
                image = product['image']
            )
            db.session.add(new_product)
        db.session.commit()

    except exc.IntegrityError:
        db.session.rollback()
        print('Products already exist in database')

    try:
        for user in users:
            new_user = User(
                id = user['id'],
                username = user['username'],
                password = user['password'],
                email = user['email'],
                role = user['role']
            )
            db.session.add(new_user)
        db.session.commit()

    except exc.IntegrityError:
        db.session.rollback()
        print('Users already exist in database')
        
@app.route('/')
def index():
    return render_template('index.html', shopname = shopname, products = get_products(),user = current_user)

@app.route('/product/<int:id>')
def product(id):
    return render_template('product.html', shopname = shopname, product = get_product(id),user = current_user)


@app.route('/product/update/<int:id>', methods = ['POST'])
@login_required
def update(id):
    title = request.form['title']
    description = request.form['description']
    price = request.form['price']
    category = request.form['category']
    if 'image' in request.files:
       image = request.files['image']
       if image.filename != '':
           image_filename = secure_filename(image.filename)
           image.save('static/' + image_filename)
       else:
           image_filename = request.form['current_image']
    else:
        image_filename = request.form['current_image']
    if update_product(id, title, description, price, category, image_filename):
        return redirect(url_for('index'))
    else:
        return redirect(url_for('product', id = id, error = "Unable to update product"))
    
@app.route('/product/add', methods = ['GET', 'POST'])
@login_required
def add():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        price = request.form['price']
        category = request.form['category']
        image = request.files['image']
        image_filename = secure_filename(image.filename)
        image.save('static/' + image_filename)
        if add_product(title, description, price, category, image_filename):
            return redirect(url_for('index'))
        else:
            return redirect(url_for('index', error = "Unable to add product"))
    else:
        return render_template('add.html', shopname = shopname, user = current_user)

@app.route('/product/delete/<int:id>', methods = ['GET'])
@login_required
def delete(id):
    if delete_product(id):
        return redirect(url_for('index'))
    else:
        return redirect(url_for('index', error = "Unable to delete product"))
    

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = get_user_by_username(username)

        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        if user and user.password == hashed_password:
            login_user(user, remember=True)
            return redirect(url_for('index'))
        else:
            return redirect(url_for('login', error = "Invalid username or password"))
    else:
        return render_template('login.html', shopname = shopname, user = current_user, error = request.args.get('error'))


@app.route('/register', methods = ['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
   
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
       
        if add_user(username, hashed_password, email, 'user'):
            return redirect(url_for('login'))
        else:
            return redirect(url_for('register', error = "Unable to register user"))
    else:
        return render_template('register.html', shopname = shopname, user = current_user, error = request.args.get('error'))
    
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))


if __name__ == '__main__':
    app.run(debug = True)