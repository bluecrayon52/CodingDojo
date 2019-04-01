# Basic - Print all integers from 0 to 150.
print("----Basic----")
for x in range(0, 151, 1):
    print(x)

# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
print("----Multiples of Five----")
for x in range(5, 1001, 5):
    print(x)

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. 
# If divisible by 10, print "Coding Dojo".
print("----Counting, the Dojo Way----")
for x in range(1, 101, 1):
    if x % 5 == 0:
        if x % 10 == 0:
            print('Coding Dojo')
        else: 
            print('Coding')
    else: 
        print(x)

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
print("----Whoa. That Sucker's Huge----")
sum = 0
for x in range(1, 500001, 1):
    sum+=x
print(sum)

# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
print("----Countdown by Fours----")
for x in range(2018, 0, -4):
    print(x)

# Flexible Counter - Set three variables: lowNum, highNum, mult. 
# Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
print("----Flexible Counter----")
def flexCount(low, high, mult):
    if low % mult != 0:
        low = low - (low % mult) + mult

    for x in range(low, high+1, mult):
        print(x)

flexCount(2, 9, 3)