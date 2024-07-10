from models import Product, db
from sqlalchemy import exc

def get_products():
    products = Product.query.all()
    return products

def get_product(id):
    product = Product.query.get(id)
    return product

def add_product(title, description, price, category, image):
    try:
        new_product = Product(
            title = title,
            description = description,
            price = price,
            category = category,
            image = image
        )
        db.session.add(new_product)
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False
    
def update_product(id, title, description, price, category, image):
    try :
        product = Product.query.get(id)
        product.title = title
        product.description = description
        product.price = price
        product.category = category
        product.image = image
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False
    
def delete_product(id):
    try:
        product = Product.query.get(id)
        db.session.delete(product)
        db.session.commit()
        return True
    except exc.IntegrityError:
        db.session.rollback()
        return False
    