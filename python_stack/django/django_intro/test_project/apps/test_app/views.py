from django.shortcuts import render, HttpResponse, redirect

def index(request):
    context = {
    	"name": "Alien Life Form",
    	"favorite_color": "turquoise",
    	"pets": ["Kitty", "Kitty", "Kitty"]
    }
    return render(request, 'test_app/index.html', context)

    # return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    return redirect("/")

def show(request, number):
    return HttpResponse(f"placeholder to display blog number: {number}")

def edit(request, number):
     return HttpResponse(f"placeholder to edit blog {number}")

def destroy(request, number):
    return redirect("/test_app")

 