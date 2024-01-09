import math
def get_area(shape):

    shape = shape.lower()

    if shape == "rectangle":
        rectangle_area()
    elif shape == "circle":
        circle_area()
    else:
        print("Please enter correct shape!")
        return get_area(shape_type)

def rectangle_area():
    length = float(input ("Enter length: "))
    width = float (input("Enter width: "))

    area = length * width

    print("The Area of rectangle is ", area)

def circle_area():
    radius = float(input("Enter radius : "))

    area = math.pi * (math.pow(radius, 2))
    print("Area of circle : ", area)


def main ():

    shape_type = input("Get area of which shape: ")
    get_area(shape_type)

main()