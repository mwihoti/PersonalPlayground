def sumAll (*args):
    sum = 0

    for i in args:
        sum += i

    return sum
print("Sum : ",sumAll(3, 5, 8, 1, 4))