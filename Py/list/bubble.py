#Bubble sort is a way to sort a list
# It works this way
# 1. An outer loop decreases in size each time
# 2. The goal is to have the largest number at the end of
#    the list when the outer loop completes 1 cycle
# 3. The inner loop starts comparing indexes at the beginning
#    of the loop
# 4. Check if list[Index] > list[Index + 1]
# 5. If so swap the index values
# 6. When the inner loop completes the largest number is at
#    the end of the list
# 7. Decrement the outer loop by 1
 
# Create the value that will decrement for the outer loop
# Its value is the last index in the list
import random
numList = []

for i in range(5):
    numList.append(random.randrange(1, 9))
i = len(numList) - 1

while i > 1:
    j = 0

    while j < 1:

        print("\n Is {} > {}".format(numList[j], numList[j+1]))
        print()

        if numList[j] > numList[j+1]:

            print("Switch")

            temp = numList[j]
            numList[j] = numList[j+1]
            numList[j+1] = temp
        else:
            print("Don't Switch")

        j += 1

        for k in numList:
            print(k, end=", ")
        print()

    print("End of Round")

    i -= 1
for k in numList:
    print(k, end=", ")
print()

