from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import portal.views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'base.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^$', portal.views.index),
    url(r'^index$', portal.views.index),
    url(r'^organization/(?P<view_type>grid|list)$', portal.views.org),
    url(r'^organization/(?P<org_id>\d+)$', portal.views.org_detail),
    url(r'^video/(?P<video_id>\d+)$', portal.views.video_detail),
    url(r'^video$', portal.views.video),
    url(r'^video/(?P<category_slug>.*)/(?P<sub_category_slug>.*)$', portal.views.video)
)
