#1 prints 5
print("----prints 5----")
def give_me_five():
    return 5
print(give_me_five())

#2 prints 10 
print("----prints 10----")
print(give_me_five()+give_me_five())

#3 prints 5
print("----prints 5----")
def give_me_five_v2():
    return 5
    return 10
print(give_me_five_v2())

#4 prints 5
print("----prints 5----")
def give_me_five_v3():
    return 5
    print(10)
print(give_me_five_v3())

#5 prints 5
print("----prints 5 and None----")
def print_five():
    print(5)
x = print_five()
print(x)

#6 prints 3, 5, and throws a TypeError (NoneType + NoneType)
# print("----prints 3, 5, and TypeError (NoneType + NoneType)----")
# def print_sum(b,c):
#     print(b+c)
# print(print_sum(1,2) + print_sum(2,3))

#7 prints the string '25'
print("----prints the concatinated string '25'----")
def string_us_together(b,c):
    return str(b)+str(c)
print(string_us_together(2,5))

#8 prints 100 and 10
print("----prints 100 and 10----")
def hundo_then_ten():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7

print(hundo_then_ten())

#9 prints 7, 14, and 21
print("----prints 7, 14, and 21----")
def seven_or_fourteen(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(seven_or_fourteen(2,3))
print(seven_or_fourteen(5,3))
print(seven_or_fourteen(2,3) + seven_or_fourteen(5,3))

#10 prints 8 
print("----prints 8----")
def add_us(b,c):
    return b+c
    return 10
print(add_us(3,5))

#11 prints 500, 500, 300, and 500
print("----prints 500, 500, 300, and 500----")
b = 500
print(b)
def test_var_scope():
    b = 300
    print(b)
print(b)
test_var_scope()
print(b)

#12 prints 500, 500, 300, and 500
print("----prints 500, 500, 300, and 500----")
b = 500
print(b)
def test_var_scope_v2():
    b = 300
    print(b)
    return b
print(b)
test_var_scope_v2()
print(b)

#13 prints 500, 500, 300, and 300
print("----prints 500, 500, 300, and 300----")
b = 500
print(b)
def test_var_scope_v3():
    b = 300
    print(b)
    return b
print(b)
b=test_var_scope_v3()
print(b)

#14 prints 1, 3, and 2
print("----prints 1, 3, and 2----")
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()

#15 prints 1, 3, 5, and 10 
print("----prints 1, 3, 5, and 10----")
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
