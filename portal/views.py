from django.shortcuts import render
from query import *

def index(request):
	featured = fetch_media_list()
	recently = fetch_media_list(limit=5)
	popular = fetch_media_list()

	return render(request, "index.html", {
        'featured': featured,
        'recently': recently,
        'popular': popular,
        'departments': fetch_department_list()
    })
