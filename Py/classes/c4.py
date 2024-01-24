class Person:
    def __init__(self, name):
        self.name = name

    def func(self):
        print('Hello my name is:', self.name)

p = Person("Dante")
print(p.func())