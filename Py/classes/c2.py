class P:
    def __init__(self, x):
        self.set_x(x)

    def  get_x(self):
        return self.__x
    def set_x(self, x):
        if x < 0:
            self.__x = 0
        elif x > 1000:
            self.__x = 1000
        else:
            self.__x = x
    x = property(get_x, set_x) 

p1 = P(43)
print(p1.get_x)