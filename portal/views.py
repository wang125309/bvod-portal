from django.shortcuts import render
from query import *

def index(request):
	featured = fetch_featured_media()
	recently = fetch_popular_media()
	popular = fetch_recently_media()
	categories = fetch_category_tree()
	departments = fetch_department_list()
	ads = fetch_ad_list()

	content = {'featured': featured, 'recently': recently, 'popular': popular, 'categories': categories, 'departments': departments, 'ads': ads}

	return render(request, "index.html", content)
