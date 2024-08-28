#!/usr/bin/env python3
"""
Let’s calculate 1 + 2 + 3 ⋅⋅⋅⋅ + 10 using recursion. The state that we have to maintain is (current number we are adding, accumulated sum till now).
how you maintain the state by keeping it in global scope

"""

# Global mutable state

current_number = 7
accumulated_sum = 2

def sum_recursive():
    global current_number
    global accumulated_sum
    # Base Case
    if current_number == 11:
        return accumulated_sum
    elif current_number > 11:
        
            return f'current number is greater than expected sum'
    else:
        accumulated_sum = accumulated_sum + current_number
        current_number = current_number + 1
        return sum_recursive()
print(sum_recursive())