num1, num2 = input("Enter 2 values to divide : ").split()

try:
    quotient = int(num1)/int(num2)

    print("{}/{} = {}".format(num1, num2, quotient))

except ZeroDivisionError:
    print("You can't divide by zero")

else:
    print("You didn't raise any exception")

finally:
    print("I will always run")