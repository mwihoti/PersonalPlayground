#input two values
num1, num2 = input('Enter 2 numbers: ').split()

#convert to integers
num1 = int(num1)
num2 = int(num2)
#find the sum and difference of the two numbers
sum = num1 + num2

diff=num1 - num2

#mutiply the 2 values

mutl = num1 * num2

#divide the 2 values
div = num1 / num2

#get modulus
remainder = num1 % num2

#print results
print("{} + {} = {}".format(num1, num2, sum))
print("{} - {} = {}".format(num1, num2, diff))
print("{} * {} = {}".format(num1, num2, mutl))
print("{} / {} = {}".format(num1, num2, div ))
print("{} % {} = {}".format(num1, num2, remainder))