import requests

base_url = 'http://bvod.limijiaoyin.com/api/'

def fetch_query_list(api_url, payload, type='media'):
   r = requests.get(api_url, params=payload)
   if r.status_code == 200:
      return r.json()
   else:
      return {"count":0, type:[]}

def fetch_featured_media(limit=7):
   api_url = base_url+'media'
   featured = {'type':'video', 'featured':'true', 'limit':limit}
   return fetch_query_list(api_url, featured)

def fetch_popular_media(limit=5):
   api_url = base_url+'media/popular'
   popular = {'limit':limit}
   return fetch_query_list(api_url, popular)

def fetch_recently_media(limit=7):
   api_url = base_url+'media'
   recently = {'type':'video', 'limit':limit}
   return fetch_query_list(api_url, recently)

def fetch_category_tree(depth=1):
   api_url = base_url+'categories/tree'
   category = {'depth':depth}
   return fetch_query_list(api_url, category, 'categories')

def fetch_department_list(limit = 7):
   api_url = base_url+'media/departments'
   department = {}
   return fetch_query_list(api_url, department, 'departments')

def fetch_ad_list(limit = 7):
   ads = {'count': 3*limit, 'departments': [{'id': 1, 'seq': i, 'title': 'OOOOO', 'desc': 'sodfasofnjaofasfddddddddas asdfa sdfasdfasdfasdf asdgfl as gfasdfa dd', 'image': 'images/ad_s.jpg', 'url': 'www.baidu.c'} for i in range(limit)]}
   return ads

if __name__ == '__main__':
	print fetch_featured_media()