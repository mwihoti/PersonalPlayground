#!/usr/bin/env python3
"""
Suppose Santa shouldn’t have to deliver all the presents by himself. I propose an algorithm with which he can divide the work of delivering presents among his elves:

Appoint an elf and give all the work to him
Assign titles and responsibilities to the elves based on the number of houses for which they are responsible:
> 1 He is a manager and can appoint two elves and divide his work among them
= 1 He is a worker and has to deliver the presents to the house assigned to him
"""

houses = ["Eric's house", "Dan's House", "Kenny's house", "Kyle's house", "Stan's house"]
elf_name = "Elf 1"
# Each function call represents an elf doing his work 
def deliver_presents_recursively(houses, elf_name):
    global elf_counter
    # Worker elf doing his work
    if len(houses) == 1:
        house = houses[0]
        print (f"Delivering presents to {house} by ({elf_name})")
        
    # Manager elf doing work
    else:
        mid = len(houses) // 2
        first_half = houses[:mid]
        second_half = houses[mid:]
        
        # Divides his work to his two elves
        elf_counter  += 1
        new_elfname1 = f"Elf {elf_counter}"
        elf_counter += 1
        new_elfname2 = f"Elf {elf_counter}"
        
        print(f"{elf_name} is a manager and appoints {new_elfname1} and Elf{new_elfname2} to deliver presents")
        #  Recursively call the function with the new elf names
        deliver_presents_recursively(first_half, new_elfname1)
        deliver_presents_recursively(second_half, f"Elf {new_elfname2}")
    
elf_counter = 1
deliver_presents_recursively(houses, elf_name)