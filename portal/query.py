import logging
import requests
import json


logger = logging.getLogger(__name__)
base_url = 'http://bvod.limijiaoyin.com/api/'


def fetch_query_result(api_url, payload, type='media'):
   r = requests.get(api_url, params=payload)
   if r.status_code == 200:
      result = r.json()
      logger.debug("fetched data: " + str(result))
      return result
   else:
      logger.debug("fail to fetch data")
      return {"count":0, type:[]}

# http://bvod.limijiaoyin.com/api/media
def fetch_featured_media(limit=7):
   api_url = base_url+'media'
   featured = {'type':'video', 'featured':'true', 'limit':limit}
   return fetch_query_result(api_url, featured)

# http://bvod.limijiaoyin.com/api/media/latest
def fetch_recently_media(limit=5):
   api_url = base_url+'media/latest'
   recently = {'limit':limit}
   return fetch_query_result(api_url, recently)

# http://bvod.limijiaoyin.com/api/media/popular
def fetch_popular_media(limit=7):
   api_url = base_url+'media/popular'
   popular = {'limit':limit}
   return fetch_query_result(api_url, popular)

# http://bvod.limijiaoyin.com/api/media/praise
# def fetch_praise_media(limit=7):
#    api_url = base_url+'media/praise'
#    praise = {'limit':limit}
#    return fetch_query_result(api_url, praise)

# http://bvod.limijiaoyin.com/api/categories/tree
def fetch_category_tree(depth=1):
   api_url = base_url+'categories/tree'
   category = {'depth':depth}
   return fetch_query_result(api_url, category, 'categories')

# http://bvod.limijiaoyin.com/api/media/departments
def fetch_department_list(offset=0, limit=7):
   api_url = base_url+'media/departments'
   department = {
      'offset': offset,
      'limit': limit
   }
   return fetch_query_result(api_url, department, 'departments')


# http://bvod.limijiaoyin.com/api/media/ads
def fetch_ad_list(limit=7):
   api_url = base_url+'media/ads'
   ad = {}
   result = fetch_query_result(api_url, ad, 'ads')
   return result['ads'][:limit]

# http://bvod.limijiaoyin.com/api/media/get
def fetch_media_item(id=0):
   item = {'id':id}
   return fetch_query_result(media_url, item)['media'][0]


def fetch_related_media(id=1,limit=3):
   return fetch_popular_media(limit)['media']

def fetch_category_recently_media(slug, offset=0, limit=7):
   items = {'category':slug, 'offset':offset, 'limit':limit, 'order':'publish_on desc'}
   return fetch_query_result(media_url, items)


def fetch_category_popular_media(slug, offset=0, limit=7):
   items = {'category':slug, 'offset':offset, 'limit':limit, 'order':'popularity desc'}
   return fetch_query_result(media_url, items)


def fetch_category_priase_media(slug, offset=0, limit=7):
   items = {'category':slug, 'offset':offset, 'limit':limit, 'order':'likes desc'}
   return fetch_query_result(media_url, items)
############################################################



#################### department page #######################
def fetch_department_media(slug, offset=0, limit=7):
   items = {'department':slug, 'limit':limit, 'offset':offset}
   return fetch_query_result(media_url, items)['media']


def fetch_department_detail(id=1):
   department = {'id':id}
   return fetch_query_result(departments_url, department, 'departments')['departments'][0]


def fetch_recently_department(offset=0, limit=7):
   return fake_department(offset, limit)

# ----------------
def fetch_popular_department(offset=0, limit=7):
   return fake_department(offset, limit)

# ----------------
def fetch_praise_department(offset=0, limit=7):
   return fake_department(offset, limit)

# http://bvod.limijiaoyin.com/api/media/popular
def fetch_related_media(id=1,limit=3):
   return fetch_popular_media(limit)['media']

def fetch_department_recently_media(slug, offset=0, limit=7):
   items = {'department':slug, 'offset':offset, 'limit':limit, 'order':'publish_on desc'}
   return fetch_query_result(media_url, items)

def fetch_department_detail(id=1):
   api_url = base_url + 'media/departments'
   payload = {'id':id}
   r = requests.get(api_url, params=payload)
   if r.status_code == 200:
      result = r.json()
      logger.debug("fetched data: " + str(result))
      return result
   else:
      logger.debug("fail to fetch data")
      return {}
