a, b = 0, 1
while a < 10:
    print("value before: {} ".format(a))
    a, b = b, a+b
    print(f"value of a: {a}")
    print(f"value of b: {b}")