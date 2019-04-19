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
            print('(models.py) MESSAGE_ID: ',postData['message_id'])
            errors['comment'+postData['message_id']] = "comment body cannot be empty"
        return errors
    
    def delete_validator(self, message_id, user_id):
        errors = {}
        message = Message.objects.get(id=message_id)
        print('DELTA: ',relativedelta(datetime.now(timezone.utc), message.created_at).minutes)
        if message.user.id != user_id:
            errors['delete'+message_id] = "you are not authorized to delete this message"
        elif relativedelta(datetime.now(timezone.utc), message.created_at).minutes  > 30: 
            errors ['delete'+message_id] = "this message is too old to delete"
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

