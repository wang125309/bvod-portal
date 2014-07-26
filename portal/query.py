import requests

base_url = 'http://bvod.limijiaoyin.com/api/'

def fetch_media_list(type='video', category='', featured='', popular='', limit=7):
   api_url = base_url+'media'
   r = requests.get(api_url, params={'type':type, 'category':category, 'featured': featured, 'popular':popular, 'limit':limit})
   if r.status_code == 200:
      return r.json()
   else:
      return {"count":0, "media":[]}

def fetch_category_tree(depth=1):
   api_url = base_url+'categories/tree'
   r = requests.get(api_url, params={'depth':depth})
   if r.status_code == 200:
      return r.json()
   else:
      return {"count":0, "categories":[]}

def fetch_department_list(limit = 7):
   departs = {'count': 3*limit, 'departments': [{'id': 5, 'name': 'FFF', 'avatar': 'images/11.png'} for i in range(limit)]}
   return departs

def fetch_ad_list(limit = 7):
   ads = {'count': 3*limit, 'departments': [{'id': 1, 'seq': i, 'title': 'OOOOO', 'desc': 'sodfasofnjaofasfddddddddas asdfa sdfasdfasdfasdf asdgfl as gfasdfa dd', 'image': 'images/ad_s.jpg', 'url': 'www.baidu.com'} for i in range(limit)]}
   return ads

if __name__ == '__main__':
	print fetch_ad_list()