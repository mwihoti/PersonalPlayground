def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Divison by zero")
    else:
        print("Divsion of x & y is:", result)
    finally:
        print("carpe-dium")
divide(4, 8)