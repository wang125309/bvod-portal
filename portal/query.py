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


def fetch_featured_media(limit=7):
   api_url = base_url+'media'
   featured = {'type':'video', 'featured':'true', 'limit':limit}
   return fetch_query_result(api_url, featured)


def fetch_recently_media(limit=5):
   api_url = base_url+'media/latest'
   recently = {'limit':limit}
   return fetch_query_result(api_url, recently)


def fetch_popular_media(limit=7):
   api_url = base_url+'media/popular'
   popular = {'limit':limit}
   return fetch_query_result(api_url, popular)


def fetch_praise_media(limit=7):
   api_url = base_url+'media/praise'
   praise = {'limit':limit}
   return fetch_query_result(api_url, praise)


def fetch_category_tree(depth=1):
   api_url = base_url+'categories/tree'
   category = {'depth':depth}
   return fetch_query_result(api_url, category, 'categories')


def fetch_department_list(offset=0, limit=7):
   api_url = base_url+'media/departments'
   department = {
      'offset': offset,
      'limit': limit
   }
   return fetch_query_result(api_url, department, 'departments')


def fetch_ad_list(limit=7):
   api_url = base_url+'media/ads'
   ad = {}
   result = fetch_query_result(api_url, ad, 'ads')
   return result['ads'][:limit]


def fetch_media_item(id=0):
   r = requests.get(base_url + "media/get", params={'id':id})
   return r.json() if r.status_code == 200 else None


def fetch_deparment_media(id=0, limit=7):
   api_url = base_url+'media/department_media'
   item = {'id':id, 'limit':limit}
   return fetch_query_result(api_url, item)
