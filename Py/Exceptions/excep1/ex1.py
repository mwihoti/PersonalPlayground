while True:
    try:
        x = int(input("Enter a valid number: "))
        break
    except ValueError:
        print("Oops! that not a valid Number")