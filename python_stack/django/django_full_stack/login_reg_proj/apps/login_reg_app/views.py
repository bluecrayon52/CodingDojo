from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
from datetime import datetime
import bcrypt

def index(request):
    return render(request, "login_reg_app/index.html")

def register(request):
    if request.method == "POST":
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect("/")
        else:
            new_user = User.objects.create(
                first_name=request.POST['first_name'],
                last_name=request.POST['last_name'],
                birthday=request.POST['birthday'],
                email=request.POST['email'],
                password= bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
            )
            request.session['user_id'] = new_user.id
            return redirect("/success")

def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect("/")
        else:
            request.session['user_id'] = user.id
            return redirect("/success")

def success(request):
    if 'user_id' not in request.session:
        return redirect("/")
    context = {
        "user": User.objects.get(id=request.session['user_id'])
    }
    return render(request, "login_reg_app/wall.html", context)

def logout(request):
    del request.session['user_id']
    return redirect("/")