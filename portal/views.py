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
        'page': p.page(current)
    }

    logger.debug(result)
    return result


@active_tab('organization')
def org(request, view_type):
    per_page = 15 if view_type == 'grid' else 5
    page = int(request.GET.get('p', None) or '1')
    choicetype = request.GET.get('choicetype', '')

    count = fetch_department_list(offset=0, limit=0)['count']
    paginator = pagination(count, page, per_page)
    offset = (paginator['current'] - 1) * per_page
    limit = per_page
    departments = fetch_department_list(offset, limit)['departments']
    if choicetype == 'new':
        count = fetch_recently_department(offset=0, limit=0)['count']
        logger.debug(count)
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        departments = fetch_recently_department(offset, limit)['departments']
    elif choicetype == 'hot':
        count = fetch_popular_department(offset=0, limit=0)['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        departments = fetch_popular_department(offset, limit)['departments']
    elif choicetype == 'good':
        count = fetch_praise_department(offset=0, limit=0)['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        departments = fetch_praise_department(offset, limit)['departments']

    def add_media(dep):
        dep['media'] = fetch_department_media(dep['id'], limit=3)['media']
        return dep

    departments = map(add_media, departments)

    return render(request, 'org-' + view_type + '.html', {
        'orglist': departments,
        'pagination': paginator,
        'choicetype': choicetype 
    })


@active_tab('organization')
def org_detail(request, org_id):
    page = int(request.GET.get('p', None) or '1')
    department = fetch_department_detail(org_id)
    count = fetch_department_media(org_id, offset=0, limit=0)['count']
    per_page = 10
    paginator = pagination(count, page, per_page)
    offset = (page - 1) * per_page
    media = fetch_department_media(org_id, offset, limit=per_page)['media']

    return render(request, "org-detail.html",{
        'media': media,
        'department': department,
        'pagination': paginator
    })


@active_tab('video')
def video_detail(request, video_id):
    video = fetch_media_item(video_id)
    related = fetch_related_media(video_id)

    keys = [] if 'categories' not in video else video['categories'].keys()
    video['category'] = None if len(keys) == 0 else video['categories'][keys[0]]

    return render(request, "video-detail.html", {
    	'video': video,
        'related':related
    })
