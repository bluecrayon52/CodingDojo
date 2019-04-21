from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Book, Review
from apps.login_reg_app.models import User


def books(request):
    if "user_id" not in request.session:
        return redirect("/")

    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "reviews": Review.objects.all(),
        "books": Book.objects.all(),
        "range":  [ i for i in range(5) ]
    }
    return render(request, "dojo_reads_app/books.html", context)

def book_detail(request, id):
    if "user_id" not in request.session:
        return redirect("/")

    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "book": Book.objects.get(id=id),
        "range": [ i for i in range(5) ]
    }
    return render(request, "dojo_reads_app/book_detail.html", context)

# Helper Function
def proc_rev_helper(request, id):
    Review.objects.create(
        book=Book.objects.get(id=id),
        add_by= User.objects.get(id=request.session['user_id']),
        comment=request.POST['comment'],
        rating=request.POST['rating'],
    )
    return True

def process_review(request, id):
    if "user_id" not in request.session or request.method == "GET":
        return redirect("/")

    errors = Review.objects.add_review_validator(request.POST)
    if len(errors) > 0: 
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
    return redirect(f"/books/{id}")

    proc_rev_helper(request, id)

    return redirect(f"/books/{id}")

def add_book(request):
    if "user_id" not in request.session:
        return redirect("/")

    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "authors": Book.objects.values_list("author", flat=True).distinct()
    }
    return render(request, "dojo_reads_app/add_book.html", context)

def add_and_process_review(request):
    if "user_id" not in request.session or request.method == "GET":
        return redirect("/")

    errors = Book.objects.add_book_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/books/add")

    if len(request.POST["author"]) < 1:
        author=request.POST["new_author"]
    else:
        author=request.POST["author"]

    book = Book.objects.create(
        title=request.POST["title"],
        author=author,
    )
    proc_rev_helper(request, book.id)

    return redirect(f"/books/{book.id}")

def user_detail(request, id):
    if "user_id" not in request.session:
        return redirect("/")

    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "that_user": User.objects.get(id=id),
        "range":  [ i for i in range(5) ]
    }
    return render(request, "dojo_reads_app/user_detail.html", context)

def delete_review(request, id):
    if "user_id" not in request.session:
        return redirect("/")

    review = Review.objects.get(id=id)

    if review.add_by.id != request.session['user_id']:
        return redirect("/")

    book = review.book
    review.delete()
    return redirect(f"/books/{book.id}")

