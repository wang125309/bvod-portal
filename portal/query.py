import requests

api_url = 'http://bvod.limijiaoyin.com/api/media'

def fetch_media_list(payload):
   r = requests.get(api_url, params=payload)
   if r.status_code == 200:
      return r.json()
   else:
      return {"count":0, "media":[]}