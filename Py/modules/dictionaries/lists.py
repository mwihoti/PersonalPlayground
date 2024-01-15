
a = [2, 30, 6, 7]
b = [7, 18, 9, 0]
c = [10, 21, 10, 5]
result = list(map(lambda x, y, z : 2.5 * x + 2 *y - z, a, b, c))
print(result)