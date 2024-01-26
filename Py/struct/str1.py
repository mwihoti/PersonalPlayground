a = [-1, 1, 2, 3, 4, 6]
del a[3: 5]
print(a)

#Transpose
matrix = [
    [1, 2, 3, 4, 2],
    [5, 6, 7, 8, 6],
    [9, 10, 11, 12, 10],
   
]
print(matrix)
p = [[row[i] for row in matrix] for i in range(5)]
print(p)

#equivalet to ->
transposed = []
for i in range(4):
    transposed.append([row[i] for row in matrix])
print(transposed)