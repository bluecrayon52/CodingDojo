from django.shortcuts import render, redirect
from django.contrib import messages
# from django.apps import apps
# User = apps.get_model('login_reg_app', 'User')
from apps.login_reg_app.models import User
from .models import Message, Comment

def wall(request):
    if 'user_id' not in request.session:
        return redirect("/")
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "posted_msgs": Message.objects.all()
    }
    return render(request, "wall_app/wall.html", context)

def post_message(request):
    if request.method == "POST":
        errors = Message.objects.message_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect("/wall")
        else:
            Message.objects.create(
                message=request.POST['message'],
                user=User.objects.get(id=request.session['user_id'])
            )
            return redirect("/wall")

def post_comment(request):
    if request.method == "POST":
        errors = Comment.objects.comment_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect("/wall")
        else:
            Comment.objects.create(
                comment=request.POST['comment'],
                user=User.objects.get(id=request.session['user_id']),
                message=Message.objects.get(id=request.POST['message_id'])
            )
            return redirect("/wall")

    return redirect("/wall")

def delete_message(request, id):
    if 'user_id' not in request.session:
        return redirect("/")
    errors = Message.objects.delete_validator(id, request.session['user_id'])
    if len(errors) > 0:
        return redirect("/wall")
    else: 
        message.delete()
    return redirect("/wall")