from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("this is the route 'other_test_app/' responding")

def route_one(request):
    return HttpResponse("this is the route 'other_test_app/route_one/' responding")

def route_two(request):
    return HttpResponse("this is the route 'other_test_app/route_two/' responding")