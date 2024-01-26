squares = []
for x in range(1, 11):
    squares.append(x**2)
print(squares)

#Equivalent to
squares = [x**2 for  x in range(1, 11)]
print(squares)