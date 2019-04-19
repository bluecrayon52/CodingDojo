from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.wall),
    url(r'^post_message$', views.post_message),
    url(r'^post_comment$', views.post_comment),
    url(r'^(?P<id>\d+)/delete_message', views.delete_message)
]