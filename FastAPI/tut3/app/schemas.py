from pydantic import BaseModel

class ItemBase(BaseModel):
    title: str
    description: str | None = None
    price: float 

class ItemCreate(ItemBase):
    pass

class item(ItemBase):
    id: int

