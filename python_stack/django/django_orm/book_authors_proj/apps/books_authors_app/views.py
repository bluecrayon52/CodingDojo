from django.shortcuts import render, HttpResponse, redirect
from .models import Book, Author

# show all of the data from a table
def index(request):
    context = {
    	"all_books": Book.objects.all()
    }
    return render(request, "books_authors_app/index.html", context)

def authors(request):
    context = {
        "all_authors": Author.objects.all()
    }
    return render(request, "books_authors_app/authors.html", context)

def new_author(request):
    if request.method == "POST":
        Author.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            notes=request.POST['notes']
        )
        return redirect('/authors')

def new_book(request):
    if request.method == "POST":
        Book.objects.create(
            title=request.POST['title'],
            desc=request.POST['desc']
        )
        return redirect('/')

def view_author(request, id):
    context = {
        "author": Author.objects.get(id=id),
        "books": Book.objects.exclude(
            id__in=Author.objects.get(id=id).books.values_list('id', flat=True)
        )  
    }
    return render(request, "books_authors_app/author.html", context)

def view_book(request, id):
    context = {
        "book": Book.objects.get(id=id),
        "authors": Author.objects.exclude(
            id__in=Book.objects.get(id=id).authors.values_list('id', flat=True)
        )
    }
    return render(request, "books_authors_app/book.html", context)

def add_author(request, id):
    if request.method == "POST":
        Book.objects.get(id=id).authors.add(
            Author.objects.get(id=request.POST['author'])
        )
        return redirect(f"/books/{id}")

def add_book(request, id):
    if request.method == "POST":
        Author.objects.get(id=id).books.add(
            Book.objects.get(id=request.POST['book'])
        )
        return redirect(f"/authors/{id}")
