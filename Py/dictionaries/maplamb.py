c = [39.2, 36.5, 37.3, 38,37.8]
F = list(map(lambda x : (float(9)/5)*x + 32, c))
print("The Fahrenheit equivalent of Celsius is: ", F)
cel = list(map(lambda x : (float(5)/9)*(x - 32), F))
print("The Celsius is equivalent to : ", cel)
