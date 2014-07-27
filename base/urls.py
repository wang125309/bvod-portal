from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import portal.views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'base.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^index$', portal.views.index),
    url(r'^video/(?P<video_id>\d+)$', portal.views.video),
    url(r'^department/(?P<department_id>\d+)$', portal.views.department),
)
