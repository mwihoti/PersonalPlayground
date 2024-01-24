def this_fails():
    x = 4/2
    return(x)

try:
    this_fails()
except ZeroDivisionError as err:
    print("Handling run-time Error: ", err)

print(this_fails())