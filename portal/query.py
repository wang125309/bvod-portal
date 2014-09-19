import logging
import requests
import json


logger = logging.getLogger(__name__)
base_url = 'http://bl.limijiaoyin.com/api/'
media_url = base_url + 'media'
categories_url = base_url + 'categories'
departments_url = base_url + 'departments'

def fetch_query_result(api_url, payload, type='media'):
   r = requests.get(api_url, params=payload)
   if r.status_code == 200:
      result = r.json()
      logger.debug("fetched data: " + str(result))
      return result
   else:
      logger.debug("fail to fetch data")
      return {"count":0, type:[]}

####################### front page ##########################
def fetch_featured_media(limit=7):
   featured = {'featured':'1', 'limit':limit}
   return fetch_query_result(media_url, featured)


def fetch_recently_media(limit=5):
   recently = {'limit':limit, 'order':'publish_on desc'}
   return fetch_query_result(media_url, recently)


def fetch_popular_media(limit=7):
   popular = {'limit':limit, 'order':'popularity desc'}
   return fetch_query_result(media_url, popular)

def fetch_praise_media(limit=7):
   popular = {'limit':limit, 'order':'likes desc'}
   return fetch_query_result(media_url, popular)

def fetch_ad_list(limit=7):
   api_url = base_url+'ads'
   ad = {}
   result = fetch_query_result(api_url, ad, 'ads')
   return result['ads'][:limit]


def fetch_department_list(offset=0, limit=7):
   department = {
      'offset': offset,
      'limit': limit
   }
   return fetch_query_result(departments_url, department, 'departments')
############################################################

####################### video page #########################
def fetch_category_tree(depth=1):
   api_url = categories_url+'/tree'
   category = {'depth':depth}
   return fetch_query_result(api_url, category, 'categories')


def fetch_media_item(id=0):
   api_url = media_url+'/get'
   item = {'id': id, 'preview':'1'}
   return fetch_query_result(api_url, item)


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
def fetch_deparment_media(slug, offset=0, limit=7):
   items = {'department':slug, 'limit':limit, 'offset':offset}
   return fetch_query_result(media_url, items)['media']


def fetch_department_detail(id=1):
   department = {'id':id}
   return fetch_query_result(departments_url, department, 'departments')['departments'][0]


def fetch_recently_department(offset=0, limit=7):
   departments = {'order':'created_on desc', 'offset':offset, 'limit':limit}
   return fetch_query_result(departments_url, departments, 'departments')


def fetch_popular_department(offset=0, limit=7):
   departments = {'order':'popularity desc', 'offset':offset, 'limit':limit}
   return fetch_query_result(departments_url, departments, 'departments')


def fetch_praise_department(offset=0, limit=7):
   departments = {'order':'likes desc', 'offset':offset, 'limit':limit}
   return fetch_query_result(departments_url, departments, 'departments')


def fetch_department_recently_media(slug, offset=0, limit=7):
   items = {'department':slug, 'offset':offset, 'limit':limit, 'order':'publish_on desc'}
   return fetch_query_result(media_url, items)

def fetch_department_popular_media(slug, offset=0, limit=7):
   items = {'department':slug, 'offset':offset, 'limit':limit, 'order':'popularity desc'}
   return fetch_query_result(media_url, items)


def fetch_department_priase_media(slug, offset=0, limit=7):
   items = {'department':slug, 'offset':offset, 'limit':limit, 'order':'likes desc'}
   return fetch_query_result(media_url, items)
###########################################################

#####################search###############################
def fetch_search_media(key, limit=7 ,offset=10):
   items = {'search':key, 'limit':limit ,'offset':offset}
   return fetch_query_result(media_url, items)


def fetch_search_department(key,limit=7,offset=10):
   items = {'search':key, 'limit':limit ,'offset':offset }
   return fetch_query_result(departments_url, items)
