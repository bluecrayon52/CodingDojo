from __future__ import unicode_literals
from django.db import models
from apps.login_reg_app.models import User
from datetime import datetime, timezone
import bcrypt
from dateutil.relativedelta import relativedelta
import re

class WallManager(models.Manager):
    def message_validator(self, postData):
        errors = {}
        if len(postData['message']) < 1:
            errors['message'] = "message body cannot be empty"
        return errors
    
    def comment_validator(self, postData): 
        errors = {}
        if len(postData['comment']) < 1:
            errors['comment'+postData['message_id']] = "comment body cannot be empty"
        return errors
    
    def delete_validator(self, message_id, user_id):
        errors = {}
        message = Message.objects.get(id=message_id)
        delta = relativedelta(datetime.now(timezone.utc), message.created_at)

        if message.user.id != user_id:
            errors['delete'+message_id] = "you are not authorized to delete this message"

        elif delta.years > 0 or delta.days > 0 or delta.hours >0 or delta.minutes > 30: 
            errors ['delete'+message_id] = "this message is too old to delete"

        return errors 

    def age_validator(self, messages):
        errors = {}

        for message in messages:
            delta = relativedelta(datetime.now(timezone.utc), message.created_at)
            print("---------->DELTA: ", delta)
            if delta.years  < 1 and delta.days < 1 and delta.hours < 1 and delta.minutes < 30:
                errors ['delete'+str(message.id)] = "this message is too old to delete"
        return errors

class Message(models.Model):
    message = models.TextField()
    user = models.ForeignKey(User, related_name="messages")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = WallManager()

    def __repr__(self):
        return f"Message: {self.message}"

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User, related_name="comments")
    message = models.ForeignKey(Message, related_name="comments")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = WallManager()

    def __repr__(self):
        return f"Comment: {self.comment}"

