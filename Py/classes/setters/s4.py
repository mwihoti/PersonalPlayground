class Person:
    def __init__(self, name, height):
        self.name = name
        self.__height = height
    def get_height(self):
        return self.__height
    def set_height(self, value, validate=True):
        if validate and not(150 <= value <= 200):
            raise ValueError("Height must be between 150 and 200")
        self.__height = value
        
per = Person("Alice", height=175)

print(per.get_height())

try:
    per.set_height(210)
except ValueError as e:
    print(e)

per.set_height(210, validate=False )
print(per.get_height())