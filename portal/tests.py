import unittest
from utils import *

# Create your tests here.
class CSNTestCase(unittest.TestCase):
	def test_csn(self):
		self.assertEqual(commaSeparatedNumber(12), '12')
		self.assertEqual(commaSeparatedNumber(123234234), '123,234,234')
		self.assertEqual(commaSeparatedNumber(0.8989), '0.8989')
		self.assertEqual(commaSeparatedNumber(-123234234), '-123,234,234')



class fancyDateTestCase(unittest.TestCase):
	def test_fancyDate(self):
		self.assertEqual(fancyDate("2014-07-26 21:18:50"), '')