#!/usr/bin/env python3

import unittest


class NumbersTest(unittest.TestCase):
    def test_even(self):
        """
        Tests that numbers between 0 and 5 are even
        """
        for i in range(0, 6):
            with  self.subTest(i=i):
                self.assertEqual(i % 2, 0, f"{i} is not even")