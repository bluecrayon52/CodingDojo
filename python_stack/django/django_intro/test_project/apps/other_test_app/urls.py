from django.conf.urls import url 
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^route_one/$', views.route_one),
    url(r'^route_two/$', views.route_two),
]