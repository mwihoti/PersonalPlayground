#provide diiferent output based on age
#1-18 -> Important
#21,50, > 65 -> Important
#all others -> not important

#get age and store as integer
age = eval(input("Enter age: "))
if (age  >= 1) and (age <= 18):
    print("Important")
elif (age == 21) and (age == 50):
    print("Important")
elif  (age >= 65):
    print("Important")
else:
    print("Not important")
