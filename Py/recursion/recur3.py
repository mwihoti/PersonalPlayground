#!/usr/bin/env python3
""""
Recursive function for calculated n! implemented in python
"""
def factorial_recursive(n):
    # Base_case: 1! = 1
    if n == 1:
        return 1
    
    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial_recursive(n-1)
print(factorial_recursive(5))