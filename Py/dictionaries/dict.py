Dict = {"fName": "Daniel", "lname": "Mwihoti", "Adress":"Zimmerman"}
print(Dict)
print(Dict.keys())
print("My name is: ", Dict["fName"])
Dict['Adress'] = "Zimmer"
print("Is there Adress: ", "Adress" in Dict ) 

print(Dict.values())

for k, v in Dict.items():
    print(k, v)

print(Dict.get("mName", "Not Here"))

Dict["mName"] = "Edward"
print(Dict)

print(Dict.get("mName", "Not Here"))

del Dict['fName']
print(Dict)

Dict.clear()

print(Dict)
for k, v in Dict.items():
    print(k, v)

print(Dict.values())   

Dict['fName'] = "Ian"

print(Dict)
