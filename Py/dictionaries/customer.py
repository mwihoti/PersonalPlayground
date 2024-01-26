customers = []

while True:

    createEntry = input("Enter Customer (Yes / No): ")
    createEntry = createEntry[0].lower()

    if createEntry == 'n':

        break

    else:

        fName,lName = input("Enter customer name: ").split()

        customers.append({'fName': fName, 'lName' : lName})

for cust in customers:
    print(cust['fName'],cust['lName'])