def fahrenheit(T):
    return (float(9)/(5) *T + 32)
def celsius(T):
    return (float(5)/(9)*(T-32))
temperatures =  (36.5, 37, 37.5, 40, 34)
F = map(fahrenheit, temperatures)
c = map(celsius, F)
temperatures_in_Fahrenheit = list(map(fahrenheit, temperatures))
temperatures_in_celsius = list(map(celsius, temperatures_in_Fahrenheit))
print("Temperature in Fahrenheit: ", temperatures_in_Fahrenheit)
print("Temperature in Celsius: ", temperatures_in_celsius)