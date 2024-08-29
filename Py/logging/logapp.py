#!/usr/bin/env python3
import logging
import employee

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s:%(name)s:%(message)s')

file_handler = logging.FileHandler('sampleLogs.log')
file_handler.setLevel(logging.ERROR)
file_handler.setFormatter(formatter)
stream_handler = logging.StreamHandler()
stream_handler.setFormatter(formatter)

logger.addHandler(file_handler)
logger.addHandler(stream_handler)
#logging.basicConfig(filename='logTest.log', level=logging.DEBUG,
                    # format='%(asctime)s:%(levelname)s:%(message)s:%(msecs)d:%(thread)d:%(threadName)s'
                   # )

def add(x, y):
    """
    Add Function
    """
    return x + y
def subtract(x, y):
    """
    Subtract function
    """
    return x - y
def multiply(x, y):
    """
    Multiply function
    """
    return x * y
def divide(x, y):
    """
    Divide function
    """
    try:
        result = x / y
    except ZeroDivisionError:
        logger.exception('Tried to divide by zero')
    else:
        return result

num_1 = 15
num_2 = 0

add_result = add(num_1, num_2)
logger.debug('Add: {} + {} = {}'.format(num_1, num_2, add_result))
sub_result = subtract(num_1, num_2)
logger.debug('Subtract: {} - {} = {}'.format(num_1, num_2, sub_result))
mult_result = multiply(num_1, num_2)
logger.debug('Multiply: {} * {} = {}'.format(num_1, num_2, mult_result))

div_result = divide(num_1, num_2)
logger.debug('Divide: {} / {} = {:.2f}'.format(num_1, num_2, div_result))