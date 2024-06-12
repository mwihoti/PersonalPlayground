from sqlalchemy.orm import Session
from . import models, schemas


# Reads rows from database
def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()

# Query a singular item by specifying the ID

def get_item(db:Session, item_id: int):
    return db.query(models.Item).filter(models.Item.id == item_id)

#create item
def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Item(title=item.title, description=item.description, price=item.price)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

