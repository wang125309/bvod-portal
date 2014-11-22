# -*- coding: utf-8 -*-  
import datetime
class sort_list:
	def __init__(self):
		self.id = 0
		self.value = ''
def commaSeparatedNumber(num):
	return format(num, ',')
def culDate(str):
	t = datetime.datetime.strptime(str, "%Y.%m.%d").date()
	today = datetime.date.today()
	oneDay = today + datetime.timedelta(days=1)
	if t == today:
		return "today"
	elif t == oneDay:
		return "tomorrow"
	else:
		return "too lang"

def fancyDate(str):
	t = datetime.datetime.strptime(str, "%Y-%m-%d %H:%M:%S").date()
	today = datetime.date.today()
	threeDaysAgo = today - datetime.timedelta(days=3)
	if t == today:
		return "今天"
	elif t >= threeDaysAgo:
		return "三天内"
	else:
		return str

