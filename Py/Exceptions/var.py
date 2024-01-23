class Dog:

    num_of_dogs = 0

    def __init__(self, name="unknown"):
        self.name = name

        Dog.num_of_dogs += 1

    @staticmethod
    def getDognum():
        print("There are current {} dogs".format(

Dog.num_of_dogs))
        
def main():
    spot = Dog("spot")
    doug = Dog("Doug")

    spot.getDognum()


main()
        
