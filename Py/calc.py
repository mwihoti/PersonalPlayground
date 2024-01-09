print("Calculator")
calc = input("Enter your values to ")

num1, operator, num2 = calc.split()

#convert into int

num1 = int(num1)
num2 = int(num2)

#print output
if operator == "+":
    print("{} + {}, = {}".format(num1, num2, num1 + num2))
elif operator == "-":
    print("{} -  {} = {}".format(num1, num2, num1 - num2))
elif operator == "*":
    print("{}  * {} = {}".format(num1, num2, num1 * num2))
elif operator == "/":
    print("{} / {} = {}".format(num1, num2, num1 / num2))
else:
    print("Use either + - * /")