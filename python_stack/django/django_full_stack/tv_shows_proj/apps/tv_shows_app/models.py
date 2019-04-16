from __future__ import unicode_literals
from django.db import models
from datetime import datetime

class ShowManager(models.Manager):
    def validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['title']) < 2:
            errors["title"] = "Show title should be at least 2 characters"

        if len(postData['network']) < 3:
            errors["network"] = "Show network should be at least 3 characters"
            
        if len(postData['desc']) > 0:
            if len(postData['desc']) < 10:
                errors["desc"] = "Show description should be at least 10 characters"

        if datetime.strptime(postData['release_date'], '%Y-%m-%d') > datetime.now():
            errors["release_date"] = "Show release date should be in the past"
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

    def __repr__(self):
        return f"Show: {self.title}"

