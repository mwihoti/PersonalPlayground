#!/usr/bin/env python3
"""
Let’s calculate 1 + 2 + 3 ⋅⋅⋅⋅ + 10 using recursion. The state that we have to maintain is (current number we are adding, accumulated sum till now).

Here’s how you do that by threading it through each recursive call (i.e. passing the updated current state to each recursive call as arguments):


"""

def sum_recursive(current_number, accumulated_sum):
    # Base Case
    # Return the final state
    if current_number == 11:
        return accumulated_sum
    
    # Recursive case
    # Thread the state through recursive call
    else:
        return sum_recursive(current_number + 1, accumulated_sum + current_number)
print(sum_recursive(1, 0))