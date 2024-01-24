class Robot:
    #class variable counting number of robots
    pop = 0

    def __init__(self, name):
        """Intializes data"""
        self.name = name
        print("(initializing {})".format(self.name))

        #when created the robot add pop
        Robot.pop += 1

    def die(self):
        """I am dying"""
        print("{} is being destroyed".format(self.name))

        Robot.pop -= 1

        if Robot.pop == 0:
            print("{} was the last one.".format(self.name))
        
        elif Robot.pop == 1:
            print("There is still 1 robot working" )
        
        else:
            print("There are still {:d} robots working.".format(Robot.pop))
    def say_hi(self):
        """Gretting the Robot"""
        print("Greetings, my master call me: {}.".format(self.name))

    @classmethod
    def how_many(cls):
        """Prints the current population"""
        print("We have {:d} robots.".format(cls.pop))

rob = Robot("R1-D2")
rob1 = Robot("R2-D1")
rob2 = Robot("R3-D5")
print(rob.say_hi())
print(Robot.how_many())

print("\nRobots can do some work here.\n")

rob1.die()
print("Robot 1 has finished thir work")
print(Robot.how_many())


