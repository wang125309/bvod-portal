import requests

base_url = 'http://bvod.limijiaoyin.com/api/'

def fetch_media_list(payload):
   api_url = base_url+'media'
   r = requests.get(api_url, params=payload)
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

if __name__ == '__main__':
	print fetch_category_tree(1)