from django.shortcuts import render
from query import *

def index(request):
	featured_query = {'type':'video', 'category':'', 'limit':7}
	recently_query = {'type':'video', 'category':'', 'limit':5}
	popular_query = {'type':'video', 'category':'', 'limit':7}

	featured = fetch_media_list(featured_query)
	recently = fetch_media_list(recently_query)
	popular = fetch_media_list(popular_query)
	content = {'featured': featured, 'recently': recently, 'popular': popular}

	return render(request, "index.html", content)
