"""test_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
# from django.contrib import admin

urlpatterns = [
    url(r'^ninja_gold/', include('apps.ninja_gold.urls')),
    url(r'^random_word/', include('apps.random_word.urls')),
    url(r'^other_test_app/', include('apps.other_test_app.urls')),
    url(r'^test_app/', include('apps.test_app.urls')),
    # url(r'^admin/', admin.site.urls),
]