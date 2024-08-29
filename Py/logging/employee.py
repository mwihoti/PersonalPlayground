#!/usr/bin/env python3
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s:%(levelname)s:%(name)s:%(filename)s:%(message)s')
file_handler = logging.FileHandler('employee.log')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

##logging.basicConfig(filename='employee.log', level=logging.INFO,
             ##       format='%(asctime)s:%(levelname)s:%(filename)s:%(message)s:%(name)s')
class Employee:
    """
    A simple Employee class
    """
    def __init__(self, first, last):
        self.first = first
        self.last = last
        
        logger.info('Created Employee: {} - {}'.format(self.fullname, self.email))
        logger.info (self.x)
        
    
    @property
    def email(self):
        return '{}{}@dans.com'.format(self.first, self.last)
    
    @property
    def fullname(self):
        return '{} {}'.format(self.first, self.last)

    @property
    def x(self):
        
        return "Hello I am {} {}  a x member".format(self.first, self.last)
    
emp_1 = Employee('Perpectual', 'Ngendo')