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


# http://bvod.limijiaoyin.com/api/media/department_media
# TODO 
def fetch_department_media(id=0, offset=0, limit=7):
   api_url = base_url+'media/department_media'
   item = {'id':id, 'limit':limit}
   result = fetch_query_result(api_url, item)
   result['media'] = result['media'][offset:offset+limit]
   return result


# http://bvod.limijiaoyin.com/api/media/ads
def fetch_ad_list(limit=7):
   api_url = base_url+'media/ads'
   ad = {}
   result = fetch_query_result(api_url, ad, 'ads')
   return result['ads'][:limit]

# http://bvod.limijiaoyin.com/api/media/get
def fetch_media_item(id=0):
   r = requests.get(base_url + "media/get", params={'id':id})
   return r.json() if r.status_code == 200 else {}


# http://bvod.limijiaoyin.com/api/media/department_media
# fake!!!!!!
def fetch_deparment_media(id=0, offset=0, limit=7):
   api_url = base_url+'media/department_media'
   item = {'id':id, 'limit':limit}
   all = fetch_query_result(api_url, item)['media']
   return all[offset:offset+limit]

# ------------
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

# ------------------------
def fake_department(offset=0, limit=7):
   return {
         "count": limit,
         "departments": [{
            "desc": "mmmkkkdfdf",
            "id": 11,
            "name": "jiji",
            "avatar": "11.jpg",
            "boss": "sdfasfas",
            "video_count": 32,
            "play_count": 23
         } for i in range(limit)]
   }


# http://bvod.limijiaoyin.com/api/media/latest
def fetch_category_recently_media(id=1, offset=0, limit=7):
   s = {
               "count": limit,
               "media": [{
                  "description": "null",
                  "views": 0,
                  "likes": 0,
                  "podcast": "null",
                  "id": 256,
                  "categories": {},
                  "author": "admin",
                  "url": "http://bvod.limijiaoyin.com/media/54c9f6b9de087e480a90f234a0a5173e_720flv-41",
                  "title": "54c9f6b9de087e480a90f234a0a5173e_720.flv",
                  "publish_on": "2014-07-27 20:49:12",
                  "slug": "54c9f6b9de087e480a90f234a0a5173e_720flv-41",
                  "comment_count": 0,
                  "urls": [{
                     "url": "http://bvod.limijiaoyin.com/data/media/51ec3007db8bfbacd2918b637f4dd087_720.mp4",
                     "width": 1280,
                     "quality": "720",
                     "height": 720
                  }, {
                     "url": "http://bvod.limijiaoyin.com/data/media/51ec3007db8bfbacd2918b637f4dd087_360.mp4",
                     "width": 480,
                     "quality": "360",
                     "height": 360
                  }],
                  "description_plain": "",
                  "type": "video",
                  "thumbs": {
                     "s": {
                        "url": "http://bvod.limijiaoyin.com/images/media/256s.jpg",
                        "x": 210,
                        "y": 135
                     },
                     "m": {
                        "url": "http://bvod.limijiaoyin.com/images/media/256m.jpg",
                        "x": 234,
                        "y": 400
                     },
                     "l": {
                        "url": "http://bvod.limijiaoyin.com/images/media/256l.jpg",
                        "x": 444,
                        "y": 377
                     }
                  }
               } for i in range(limit)]
            }
   return s

# http://bvod.limijiaoyin.com/api/media/popular
def fetch_category_popular_media(id=1, offset=0, limit=7):
   return fetch_category_recently_media()

# http://bvod.limijiaoyin.com/api/media/popular
def fetch_category_priase_media(id=1, offset=0, limit=7):
   return fetch_category_recently_media()


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
