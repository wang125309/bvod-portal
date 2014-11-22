import logging

from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from datetime import datetime
import json
import django_active_tab as active_tab
import time
from query import *
from utils import *
import truncate

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
    
    def add_media(dep):
        dep['medias'] = fetch_deparment_media(dep['slug'], limit=3)
        dep['description'] = truncate(dep['description'], 35)
        logger.debug("hello:")
        logger.debug(dep['medias'])
        return dep

    departments = map(add_media, departments)

    return render(request, 'org-' + view_type + '.html', {
        'orglist': departments,
        'pagination': paginator,
        'type': type,
        'count': count,
    })


@active_tab('organization')
def org_detail(request, org_id):
    type = request.GET.get('type', 'new')
    page = int(request.GET.get('p', None) or '1')
    try :
        department = fetch_department_detail(org_id)
    except:
        return render(request, 'error.html')
    
    department['created_on'] = datetime.datetime.strptime(department['created_on'], "%Y-%m-%d %H:%M:%S").date().isoformat()    

    fetch = fetch_department_recently_media
    if type == 'hot':
        fetch = fetch_department_popular_media
    elif type == 'good':
        fetch = fetch_department_priase_media

    per_page = 20
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
        return render(request, 'error.html')
    #FIXME 
    related = [] #video['related_media'][:3]
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
@active_tab('live')
def live_detail(request,live_id):
	live = fetch_live_item(live_id)
	return render(request,"live-detail.html",{
		'live':live
	})	
@active_tab('live')
def live(request):
	per_page = 8
	fetch = fetch_live_media
	live = fetch()['live']
	s = []
	for i in xrange(len(live)):
		sl = sort_list()
		v = json.dumps(live[i])
		l = v.split(",")
		sl.value = l[6].split("\": \"")[1].split(" ")[0]+" "+l[6].split("\": \"")[1].split(" ")[1].split("\"")[0]
		sl.id = i
		s.append(sl)
	s.sort(lambda x,y:cmp(x.value,y.value))
	
	liv = []
	for i in s:
		liv.append([])
	for i in range(len(s)):
		liv[i] = live[s[i].id]
	live = liv
	now = time.strftime('%Y.%m.%d %H:%M',time.localtime(time.time()))
	bp = 1
	for i in range(len(s)):
		if s[i].value >= now :
			bp = i
			break
	live = live[bp::]
	so = []
	for i in xrange(len(live)):
		sl = sort_list()
		v = json.dumps(live[i])
		l = v.split(",")
		sl.value = l[3].split("\": \"")[1].split(" ")[0]+" "+l[3].split("\": \"")[1].split(" ")[1].split("\"")[0]
		sl.id = i
		so.append(sl)
	so.sort(lambda x,y:cmp(x.value,y.value))
	liv2 = []
	for i in so:
		liv2.append([])
	for i in range(len(so)):
		liv2[i] = live[so[i].id]
	live = liv2
	li = {}
	li['live'] = live
		
	return render(request, "live.html",{
		'live' : li
	})

@active_tab('video')
def video(request, category_slug='', sub_category_slug=''):
    per_page = 16
    page = int(request.GET.get('p', None) or '1')
    type = request.GET.get('type', 'new')
    
    fetch = fetch_category_recently_media     
    if type == 'hot':
        fetch = fetch_category_popular_media
    elif type == 'good':
        fetch = fetch_category_priase_media
    if sub_category_slug == '':
        count = fetch(category_slug)['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        videos = fetch(category_slug, offset, limit)['media']
    else :
        count = fetch(sub_category_slug)['count']
        paginator = pagination(count, page, per_page)
        offset = (paginator['current'] - 1) * per_page
        limit = per_page
        videos = fetch(sub_category_slug, offset, limit)['media']

    category = fetch_category_tree()['categories']
    logger.debug('hi, videos')
    logger.debug(videos)
    return render(request, "videos.html", {
        'content': videos,
        'category': category,
        'type': type,
        'pagination': paginator,
        'category_slug': category_slug,
        'sub_category_slug': sub_category_slug,
        'count': count
    })

def search(request,q='',t='media'):
	per_page = 10 
	q = request.GET.get("q")
	t = request.GET.get("t")
	limit = per_page
	videos = fetch_search_media(q,limit)
	departments = fetch_search_department(q,limit)
	if t == 'media':
		if len(q) > 0 :
			count1 = videos['count']
			count2 = departments['count']
			count = count1 + count2
			page = int(request.GET.get('p', None) or '1')
			offset = (page-1)*10
			videos = fetch_search_media(q,limit,offset)
			paginator = pagination(count, page, per_page)
			return render(request, "search.html",{
				'q':q,
				'videos':videos,
				't':t,
				'count':count,
                		'count1':count1,
                		'count2':count2,
				'pagination':paginator
			})
		else :
			return render(request,"search.html",{
				'q':q,
				'videos':{},
				't':t,
				'count':0,
                		'count1':0,
                		'count2':0
			})
	elif t == 'department':
		if len(q) > 0 :
			count2 = departments['count']
			count1 = videos['count']
			count = count1 + count2
			page = int(request.GET.get('p', None) or '1')
			offset = (page-1)*10
			departments = fetch_search_department(q,limit,offset)
			paginator = pagination(count, page, per_page)
			limit = per_page
			orgs = fetch_search_department(q, limit, offset)['departments']
			def add_media(dep):
				dep['medias'] = fetch_deparment_media(dep['slug'], limit=3)
				dep['description'] = truncate(dep['description'], 35)
				return dep

			orgs = map(add_media, orgs)

			return render(request, "search.html",{
				'q':q,
				'departments':departments,
				't':t,
				'count':count,
                'count1':count1,
                'count2':count2,
				'pagination':paginator,
				'orgs':orgs,
			})
		else :
			return render(request,"search.html",{
				'q':q,
				'departments':{},
				't':t,
				'count':0,
                'count1':0,
                'count2':0,
				'orgs':{}
			})
