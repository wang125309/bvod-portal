from django.shortcuts import render, redirect
from query import *


def index(request):
	return render(request, "index.html", {
		'featured': fetch_featured_media(), 
		'recently': fetch_recently_media(), 
		'popular': fetch_popular_media(), 
        'departments': fetch_department_list()['departments'],
		'ads': fetch_ad_list()
    })


def video(request, video_id):
    return render(request, "video.html", {
    	
    	})
