from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    product = Product.objects.get(id=request.POST["id"])
    price = product.price
    total_charge = quantity_from_form * price
    print("Charging credit card...")
    order = Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return redirect(f"/thanks/{order.id}")

def thanks(request, id):
    orders = Order.objects.all().values()
    order_count = len(orders)
    total = 0
    for order in orders:
        total+= order['total_price']

    print('order_count: ', order_count)  
    print('total: ', total)
    context = {
        "order": Order.objects.get(id=id),
        "total": total,
        "order_count": order_count
    }
    return render(request, "store/checkout.html", context)