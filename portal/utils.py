# -*- coding: utf-8 -*-  
import datetime

def commaSeparatedNumber(num):
	return format(num, ',')


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

