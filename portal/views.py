from django.shortcuts import render
from query import *

def index(request):
	return render(request, "index.html", {
        'featured': fetch_featured_media(),
        'popular': fetch_popular_media(),
        'recently': fetch_recently_media(limit=5),
        'departments': fetch_department_list(),
        'ads': fetch_ad_list()
    })
