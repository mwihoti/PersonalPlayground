import random
import math

getList = ["string", 1, 20.5]
listTen = list(range(10))

getList = getList + listTen
print(getList[0])

print(getList)
print("Get Length: ", len(getList))
first3 = getList[0:3]
print(first3)
print("string" in first3)
print("Index of string:", first3.index("string"))
print("Count string: ", first3.count("string"))

first3[0] = "new string"
for i in first3:
    print("{} : {}".format(first3.index(i), i))

first3.append("Another")
print(first3)
for m in first3:
    print("{} : {}".format(first3.index(m), m))