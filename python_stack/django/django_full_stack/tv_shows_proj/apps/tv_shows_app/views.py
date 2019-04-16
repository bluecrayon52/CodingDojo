from django.shortcuts import render,  redirect
from .models import Show

def index(request):
    if request.method == "GET":
        return redirect("/shows")

def all_shows(request):
    if request.method == "GET":
        context = {
            "all_shows": Show.objects.all()
        }
        return render(request, "tv_shows_app/all_shows.html", context)

def new_show(request):
    if request.method == "GET":
        return render(request, "tv_shows_app/new_show.html")

def create_show(request):
    if request.method == "POST":
        new_show = Show.objects.create(
            title=request.POST['title'],
            network=request.POST['network'],
            release_date=request.POST['release_date'],
            desc=request.POST['desc']
        )
        return redirect(f"/shows/{new_show.id}")

def show_detail(request, id):
    if request.method == "GET":
        context = {
            "show": Show.objects.get(id=id)
        }
        return render(request, "tv_shows_app/show_detail.html", context)

def edit_show(request, id):
    if request.method == "GET":
        context = {
            "show": Show.objects.get(id=id)
        }
        return render(request, "tv_shows_app/edit_show.html", context)

def update_show(request, id):
    if request.method == "POST":
        show = Show.objects.get(id=id)
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.release_date = request.POST['release_date']
        show.desc = request.POST['desc']
        show.save()
        return redirect(f"/shows/{show.id}")

def delete_show(request, id):
    if request.method == "GET":
        Show.objects.get(id=id).delete()
        return redirect("/shows")
