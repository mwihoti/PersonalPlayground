import unittest
from emp import Employee

class TestEmp(unittest.TestCase):
    def test_email(self):
        emp_1 = Employee('Dan', 'Mwihoti', 20000)
        emp_2 = Employee('Mark', 'Tommy', 10000)

        self.assertEqual(emp_1.email, 'Dan.Mwihoti@gmail.com')

        emp_1.first = "Bobo"
        self.assertEqual(emp_1.email, 'Bobo.Mwihoti@gmail.com')

    def test_fullname(self):
        emp_1 = Employee('Dan', 'Mwihoti', 20000)
        emp_2 = Employee('Mark', 'Tommy', 10000)

        self.assertEqual(emp_1.fullname, 'Dan Mwihoti')
        emp_1.first = "Edward"
        self.assertEqual(emp_1.fullname, 'Edward Mwihoti')

    def test_apply_raise(self):
        emp_1 = Employee('Dan', 'Mwihoti', 20000)
        emp_2 = Employee('Mark', 'Tommy', 10000)

        emp_1.apply_raise()
        self.assertEqual(emp_1.pay, 21600)

if __name__ == '__main__':
    unittest.main()
