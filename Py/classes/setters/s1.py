class Robot:
    def __init__(self, name, build_year, city):
        self.__name = name
        self.__build_year = build_year
        self.__city = city

    @property
    def name(self):
        return self.__name
    
    @property
    def build_year(self):
        return self.__build_year
    @property
    def city(self):
        return self.__city
    
    @name.setter
    def name(self, value):
        self.__name = value
    @build_year.setter
    def build_year(self, value):
        self.__build_year
    @city.setter
    def city(self, value):
        self.__city = value
    def get_details(self):
        details = f"Name: {self.__name}, Build_year: {self.__build_year}, city: {self.__city}"
        return details
    
rob = Robot("Dante", 2000, "Kerugoya")
print(vars(rob))

print("Clients details:- ", vars())