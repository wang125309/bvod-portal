import logging

from django.shortcuts import render, redirect
from django.core.paginator import Paginator

import django_active_tab as active_tab

from query import *


logger = logging.getLogger(__name__)


@active_tab('index')
def index(request):
	return render(request, "index.html", {
		'featured': fetch_featured_media(), 
		'recently': fetch_recently_media(), 
		'popular': fetch_popular_media(), 
        'departments': fetch_department_list()['departments'],
		'ads': fetch_ad_list()
    })


class EmptyList:
    def __init__(self, len):
        self.len = len

    def __len__(self):
        return self.len

    def __getitem__(self, *args, **kwargs):
        return None


def pagination(count, current, per_page):
    p = Paginator(EmptyList(count), per_page)
    logger.debug("num_pages: " + str(p.num_pages))
    current = min(p.num_pages, current)
    logger.debug("current: " + str(current))
    pages = range(max(1, current-4), min(current+5, p.num_pages+1))
    logger.debug(pages)
    firstPage = p.page(pages[0])
    lastPage = p.page(pages[-1])
    result = {
        'current': current,
        'pages': pages,
        'prev': pages[0] - 1 if firstPage.has_previous() else None,
        'next': pages[-1] + 1 if lastPage.has_next() else None
    }

    logger.debug(result)
    return result


@active_tab('organization')
def org(request):
    viewtype = request.GET.get('viewtype', 'list')

    if viewtype == 'detail':
        return render(request, "org-detail.html",{})

    count = fetch_department_list(offset=0, limit=0)['count']
    page = int(request.GET.get('p', None) or '1')

    if viewtype == 'grid':
        paginator = pagination(count, page, 15)
        return render(request, "org-grid.html",{
        	'orglist': fetch_department_list(offset=(paginator['current']-1)*15, limit=15)['departments'],
            'pagination': paginator
        })

    paginator = pagination(count, page, 5)
    return render(request, "org-list.html",{
        'orglist': fetch_department_list(offset=(paginator['current']-1)*5, limit=5)['departments'],
        'pagination': paginator 
    })


@active_tab('video')
def video_detail(request, video_id):
    video = fetch_media_item(video_id)

    keys = [] if 'categories' not in video else video['categories'].keys()
    video['category'] = None if len(keys) == 0 else video['categories'][keys[0]]

    return render(request, "video-detail.html", {
    	'video': video
    })
