from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    if request.method == "GET":
        if 'attempt' in request.session:
            request.session['attempt'] = request.session['attempt'] + 1
        else:
            request.session['attempt'] = 1
        context = {
            "string": get_random_string(length=14)
        }
        return render(request, 'random_word/index.html', context)

def reset(request):
    del request.session['attempt']
    return redirect("/random_word")