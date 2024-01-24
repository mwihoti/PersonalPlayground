class Circle:
    def __init__(self, radius):
        self.__radius = radius
    def get_area(self):
        return 3.14 * self.__radius**2
    def set_radius(self, value):
        if value < 0:
            raise ValueError("Must not have a negative radius")
        self.__radius = value

rad = Circle(7)
print(rad.get_area())
print(vars(rad))
    