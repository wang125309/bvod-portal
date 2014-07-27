from django.shortcuts import render, redirect
import django_active_tab as active_tab
from query import *


@active_tab('index')
def index(request):
	return render(request, "index.html", {
		'featured': fetch_featured_media(), 
		'recently': fetch_recently_media(), 
		'popular': fetch_popular_media(), 
        'departments': fetch_department_list()['departments'],
		'ads': fetch_ad_list()
    })


@active_tab('organization')
def department(request, department_id):
    return redirect("/index")


def org(request):
    viewtype=request.GET.get('viewtype')
    if viewtype == 'detail':
        return render(request, "org-detail.html",{})
    if viewtype == 'grid':
        return render(request, "org-grid.html",{
        	'orglist':fetch_department_list()['departments']
        })
    return render(request, "org-list.html",{
        	'orglist':fetch_department_list()['departments']
        })


@active_tab('video')
def video_detail(request, video_id):
    video = fetch_media_item(video_id)

    keys = [] if 'categories' not in video else video['categories'].keys()
    video['category'] = None if len(keys) == 0 else video['categories'][keys[0]]

    return render(request, "video-detail.html", {
    	'video': video
    })
