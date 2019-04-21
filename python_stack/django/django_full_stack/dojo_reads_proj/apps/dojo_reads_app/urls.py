from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^books$', views.books),

    url(r'^books/(?P<id>\d+)$', views.book_detail),

    url(r'^books/(?P<id>\d+)/process_review$', views.process_review),

    url(r'^books/delete_review/(?P<id>\d+)', views.delete_review),

    url(r'^books/add$', views.add_book),

    url(r'^books/add/process_review$', views.add_and_process_review),

    url(r'^users/(?P<id>\d+)$', views.user_detail)
]