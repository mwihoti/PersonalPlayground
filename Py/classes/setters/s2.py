class Robot:
    def __init__(self, build_year, name, city):
        self.build_year = build_year
        self.name = name
        self.city = city
    
    def __getatr__(self, name):
        return self.__dict__[f"__name"]
    def __setatr__(self, name, value):
        if name == 'name':
            if value in ['Henery', 'oscar']:
                raise ValueError("Not a good name for robot")
        elif name == 'build_year':
            if int(value) < 2020:
                raise ValueError("Build year has be after 2019")
        self.__dict__[f"__{name}"] = value

rob = Robot(2020, "Dante", "Kisumu")
print(vars(rob))     