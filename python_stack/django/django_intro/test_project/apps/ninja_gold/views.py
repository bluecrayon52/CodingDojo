from django.shortcuts import render, HttpResponse, redirect
import random
from datetime import datetime

def index(request):
    if request.method == "GET":
        if 'gold' not in request.session:
            request.session['gold'] = 0
            request.session['messages'] = []

        return render(request, 'ninja_gold/index.html')

def process(request):
    if request.method == "POST":
        place = request.POST['place']
        if place == 'farm':
            amount = random.randint(10, 20) 
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Earned {amount} golds on the farm! ({datetime.now()})',
                'gain': True
            })
            request.session['gain'] = True 
        elif place == 'cave':
            amount = random.randint(5, 10)
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Found {amount} golds in the cave! ({datetime.now()})',
                'gain': True
            })
        elif place == 'house':
            amount = random.randint(2, 5) 
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Earned {amount} golds from home! ({datetime.now()})',
                'gain': True
            })
        else:
            amount = random.randint(-50, 50)
            request.session['gold'] += amount
            if amount > 0:
                request.session['messages'].insert(0, {
                'message': f'Won {amount} golds from the casino! ({datetime.now()})',
                'gain': True
                })
            else: 
                request.session['messages'].insert(0, {
                'message': f'Lost {abs(amount)} golds from the casino! ({datetime.now()})',
                'gain': False
                })
        return redirect('/ninja_gold')

def process_alt(request, place):
    if request.method == "GET":
        if place == 'farm':
            amount = random.randint(10, 20) 
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Earned {amount} golds on the farm! ({datetime.now()})',
                'gain': True
            })
            request.session['gain'] = True 
        elif place == 'cave':
            amount = random.randint(5, 10)
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Found {amount} golds in the cave! ({datetime.now()})',
                'gain': True
            })
        elif place == 'house':
            amount = random.randint(2, 5) 
            request.session['gold'] += amount
            request.session['messages'].insert(0, {
                'message': f'Earned {amount} golds from home! ({datetime.now()})',
                'gain': True
            })
        else:
            amount = random.randint(-50, 50)
            request.session['gold'] += amount
            if amount > 0:
                request.session['messages'].insert(0, {
                'message': f'Won {amount} golds from the casino! ({datetime.now()})',
                'gain': True
                })
            else: 
                request.session['messages'].insert(0, {
                'message': f'Lost {abs(amount)} golds from the casino! ({datetime.now()})',
                'gain': False
                })

        return redirect('/ninja_gold')

def reset(request):
    if request.method == "GET":
        del request.session['gold']
        del request.session['messages']
        return redirect('/ninja_gold')