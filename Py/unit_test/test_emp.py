import unittest
from unittest.mock import patch
from emp import Employee

class TestEmp(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("set-up class")
        
    @classmethod
    def tearDownClass(cls):
        print("teardown class")
        
    def setUp(self):
        print("set-up")
        self.emp_1 = Employee("Dan", "Mwihoti", 3000)

    def tearDown(self):
        print("teardown")
        pass

    def test_email(self):
        print("Email")
        self.assertEqual(self.emp_1.email, "Dan.Mwihoti@gmail.com")
    
    def test_fullname(self):
        print("fullname")
        self.assertEqual(self.emp_1.fullname, "Dan Mwihoti")

    def test_apply_raise(self):
        print("apply_raise")
        self.emp_1.apply_raise()
        self.assertEqual(self.emp_1.pay, 3240)

    #def test_monthly_schedule(self):
        #with patch('employee.requests.get') as mocked_get:
          #  mocked_get.return_value.ok = True
           # mocked_get.return_value.text = 'success'

           # schedule = self.emp_1.monthly_schedule('May')
           # mocked_get.assert_called_with('http://company.com/mwihoti/May')
            #self.assertEqual(schedule, 'success')



if __name__ == '__main__':
    unittest.main()