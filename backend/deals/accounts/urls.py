from django.conf.urls import include
from django.urls import re_path as url
from django.urls import path

accounts_urlpatterns = [
    url(r'^api/v1/', include('djoser.urls')),
    url(r'^api/v1/', include('djoser.urls.authtoken')),
]