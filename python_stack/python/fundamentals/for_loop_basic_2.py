# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(lst):
    for x in range(0,len(lst),1):
        if lst[x] > 0:
            lst[x] = 'big'
    return lst

testList = [-1, 3, 5, -5]
testList2 = biggie_size(testList) # pass by reference 
print(testList)
print(testList2) # pointing to the same list 
testList2[0] = "changed"
print(testList)

def biggie_size_copy(lst):
    cpy = lst.copy()    # make a copy of the list 
    for x in range(0,len(cpy),1):
        if cpy[x] > 0:
            cpy[x] = 'big'
    return cpy

testList3 = [-1, 3, 5, -5]
testList4 = biggie_size_copy(testList3) # pass by reference, but copied 
print(testList3) # unchanged 
print(testList4)


# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive 
# values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(lst):
    pos = 0
    for x in range(0, len(lst), 1):
        if lst[x] > 0:
            pos+=1
    lst[len(lst) - 1] = pos
    return lst

print(count_positives([-1,1,1,1]))
print(count_positives([1,6,-4,-2,-7,-2]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the array.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
def sum_total(lst):
    sum = 0 
    for x in range(0, len(lst), 1):
        sum+=lst[x]
    return sum
print(sum_total([1,2,3,4]))
print(sum_total([6,3,-2]))


# Average - Create a function that takes a list and returns the average of all the values.
# Example: average([1,2,3,4]) should return 2.5
def average(lst):
    return sum_total(lst)/len(lst)

print(average([1,2,3,4]))

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
def length(lst):
    return len(lst)

print(length([37,2,1,-9]))
print(length([]))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. 
# If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
def minimum(lst):
    if(len(lst) == 0):
        return False 
    min = lst[0]
    for x in range(1, len(lst), 1):
        if lst[x] < min:
            min = lst[x]
    return min 

print(minimum([37,2,1,-9]))
print(minimum([]))

# Maximum - Create a function that takes a list and returns the maximum value in the array. 
# If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
def maximum(lst):
    if(len(lst) == 0):
        return False 
    max = lst[0]
    for x in range(1, len(lst), 1):
        if lst[x] > max:
            max = lst[x]
    return max

print(maximum([37,2,1,-9]))
print(maximum([]))

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, 
# average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimate_analysis(lst):
    return {
        'sumTotal': sum_total(lst),
        'average': average(lst),
        'minimum': minimum(lst),
        'maximum': maximum(lst),
        'length': length(lst)
    }

print(ultimate_analysis([37,2,1,-9]))

# Reverse List - Create a function that takes a list and return that list with values reversed. 
# Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse_list(lst):
    stop = len(lst) // 2
    for x in range(0, stop, 1):
        temp = lst[x]
        lst[x] = lst[len(lst) - (1 + x)]
        lst[len(lst) - (1 + x)] = temp
    return lst

print(reverse_list([37,2,3,1,-9]))
print(reverse_list([37,2,1,-9]))
