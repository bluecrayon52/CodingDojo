from __future__ import unicode_literals
from django.db import models
from apps.login_reg_app.models import User

def rev_val_helper(errors, postData): 
    if len(postData['comment']) < 1:
        errors['comment'] = "comment is required"
    if len(postData['rating']) < 1:
        errors['rating'] = "rating is required"
    return errors

class BookManager(models.Manager):
    def add_book_validator(self, postData):
        errors = {}
        if len(postData['title']) < 1:
            errors['title'] = "title is required"
        if len(postData['author']) < 1 and len(postData['new_author']) < 1:
            errors['author'] = "author is required"
        errors = rev_val_helper(errors, postData)
        return errors
    
    def add_review_validator(self, postData):
        errors = {}
        errors = rev_val_helper(errors, postData)
        return errors
    
    def del_review_validator(self, user_id, review_id):
        errors = {}
        user = User.objects.get(id=user_id)
        review = Review.objects.get(id=review_id)
        if review.add_by.id != user.id:
            errors['del_review_auth'] = "you are not authorized to delete this review"
        return errors

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

    def __repr__(self):
        return f"Book: {self.title}"

class Review(models.Model):
    RATINGS  = [(i,i) for i in range(6)]
    book = models.ForeignKey(Book, related_name="reviews")
    add_by = models.ForeignKey(User, related_name="reviews")
    comment = models.TextField()
    rating = models.PositiveIntegerField(choices=RATINGS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

    def __repr__(self):
        return f"Review: book: {self.book.title},rating: {self.rating}"
