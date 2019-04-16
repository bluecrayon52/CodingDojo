from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^authors$', views.authors),
    url(r'^new_author$', views.new_author),
    url(r'^new_book$', views.new_book),
    url(r'^books/(?P<id>\d+)$', views.view_book),
    url(r'^authors/(?P<id>\d+)$', views.view_author),
    url(r'^books/(?P<id>\d+)/add_author$', views.add_author),
    url(r'^authors/(?P<id>\d+)/add_book$', views.add_book)
]