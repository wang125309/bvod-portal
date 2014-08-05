import logging

from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from datetime import datetime

import django_active_tab as active_tab

from query import *
from utils import *

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
    type = request.GET.get('type', 'new')
    
    fetch = fetch_recently_department
    if type == 'hot':
        fetch = fetch_popular_department
    elif type == 'good':
        fetch = fetch_praise_department

    count = fetch(offset=0, limit=0)['count']
    paginator = pagination(count, page, per_page)
    offset = (paginator['current'] - 1) * per_page
    limit = per_page
    departments = fetch(offset, limit)['departments']
    logger.debug("departments:ccv")
    logger.debug(departments)
    
    def add_media(dep):
        dep['medias'] = fetch_deparment_media(dep['slug'], limit=3)
        logger.debug("hello:")
        logger.debug(dep['medias'])
        return dep

    departments = map(add_media, departments)

    return render(request, 'org-' + view_type + '.html', {
        'orglist': departments,
        'pagination': paginator,
        'type': type 
    })


@active_tab('organization')
def org_detail(request, org_id):
    type = request.GET.get('type', 'new')
    page = int(request.GET.get('p', None) or '1')
    department = fetch_department_detail(org_id)
    department['created_on'] = datetime.datetime.strptime(department['created_on'], "%Y-%m-%d %H:%M:%S").date().isoformat()    

    fetch = fetch_department_recently_media
    if type == 'hot':
        fetch = fetch_department_popular_media
    elif type == 'good':
        fetch = fetch_department_priase_media

    per_page = 15
    count = fetch(department['slug'])['count']
    paginator = pagination(count, page, per_page)
    offset = (paginator['current'] - 1) * per_page
    medias = fetch(department['slug'], offset, per_page)['media']
    logger.debug("fdskfjdskf")
    logger.debug(medias)
    #offset = (page - 1) * per_page

    return render(request, "org-detail.html",{
        'medias': medias,
        'count': count,
        'department': department,
        'type': type,
        'pagination': paginator
    })


@active_tab('video')
def video_detail(request, video_id):
    video = fetch_media_item(video_id)
    if 'error' in video:
        return redirect('http://bvod.limijiaoyin.com/wa')

    related = video['related_media'][:3]
    video['related_media'] = []

    video['category'] = '/'.join(video['categories'].values())

    video['views'] = commaSeparatedNumber(video['views'])
    video['likes'] = commaSeparatedNumber(video['likes'])
    video['dislikes'] = commaSeparatedNumber(video['dislikes'])
    video['comment_count'] = commaSeparatedNumber(video['comment_count'])

    video['publish_on'] = fancyDate(video['publish_on'])
    return render(request, "video-detail.html", {
    	'video': video,
        'related':related
    })

@active_tab('video')
def video(request, category_slug='', sub_category_slug=''):
    per_page = 16
    page = int(request.GET.get('p', None) or '1')
    type = request.GET.get('type', 'new')
    
    if category_slug == '':
        if type == 'hot':
            fetch = fetch_popular_media
        elif type == 'good':
            fetch = fetch_praise_media
        else:
            fetch = fetch_recently_media
        count = fetch()['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        videos = fetch(limit)['media']

    else:
        fetch = fetch_category_recently_media
        if type == 'hot':
            fetch = fetch_category_popular_media
        elif type == 'good':
            fetch = fetch_category_priase_media
        count = fetch(category_slug)['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        if sub_category_slug == '':
            videos = fetch(category_slug, offset, limit)['media']
        else :
            videos = fetch(sub_category_slug, offset, limit)['media']

    category = fetch_category_tree()['categories']
    return render(request, "videos.html", {
        'content': videos,
        'category': category,
        'type': type,
        'pagination': paginator,
        'category_slug': category_slug,
        'sub_category_slug': sub_category_slug,
        'count': count
    })
