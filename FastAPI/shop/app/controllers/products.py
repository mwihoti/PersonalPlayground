from models import Product, db
from sqlalchemy import exec

def get_products():
    products = Product.query.all()
    return products
