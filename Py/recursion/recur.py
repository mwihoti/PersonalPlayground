#!/usr/bin/env python3
"""
Have you ever wondered how Christmas presents are delivered? I sure have, and I believe Santa Claus has a list of houses he loops through. He goes to a house, drops off the presents, eats the cookies and milk, and moves on to the next house on the list. Since this algorithm for delivering presents is based on an explicit loop construction, it is called an iterative algorithm.
"""

houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

def deliver_present_iteratively():
    for house in houses:
        print('Delivering presents to', house)
deliver_present_iteratively()