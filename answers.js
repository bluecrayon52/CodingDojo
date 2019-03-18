/*
􀀂 Setting and Swapping
Set myNumber to 42. Set myName to your name.
Now swap myNumber into myName & vice versa.
*/
let myNumber = 42;
let myName = 'Nathan';
// console.log(`Before: myName = ${myName}, myNumber = ${myNumber}`);
let temp = myNumber;
myNumber = myName;
myName = temp;
// console.log(`After: myName = ${myName}, myNumber = ${myNumber}`);

/*
􀀂 Print -52 to 1066
Print integers from -52 to 1066 using a FOR loop.
*/
for(let i = -52; i < 1067; i++){
    // console.log(i);
}

/*
􀀂 Don’t Worry, Be Happy
Create beCheerful(). Within it, console.log
string "good morning!" Call it 98 times.
*/
const beCheerful = () => {
    console.log("good morning!");
}

for(let i = 0; i < 98; i++) {
   // beCheerful();
}

/*
􀀂 Multiples of Three – but Not All
Using FOR, print multiples of 3 from -300 to 0.
Skip -3 and -6.
*/
for (let i = -300; i < 1; i++) {
    if (i % 3 == 0 && (i != -3 && i != -6)) {
        // console.log(i);
    }
}

/*
􀀂 Printing Integers with While
Print integers from 2000 to 5280, using a WHILE.
*/
let count = 2000;

while(count < 5281){
    // console.log(count);
    count++;
}

/*
􀀂 You Say It’s Your Birthday
If 2 given numbers represent your birth month
and day in either order, log "How did you
know?", else log "Just another day...."
*/
const isItMyBDay = (bMonth, bDay, a, b) => {
   let resp = (a == bMonth && b == bDay) || (a == bDay && b ==bMonth) ?
   "How did you know?" : "Just another day....";
    console.log(resp);
}

// isItMyBDay(5,2,2,5);
// isItMyBDay(5,2,5,2);
// isItMyBDay(5,2,1,16);

/*
􀀂 Leap Year
Write a function that determines whether a given
year is a leap year. If a year is divisible by four,
it is a leap year, unless it is divisible by 100.
However, if it is divisible by 400, then it is.
*/
const isLeapYear = (year) => {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

// console.log(isLeapYear(2004));
// console.log(isLeapYear(2008));
// console.log(isLeapYear(2005));
// console.log(isLeapYear(2006));

/*
􀀂 Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were.
*/
let num = 0;
for (let i = 512; i < 4097; i++) {
    if (i % 5 == 0) {
        // console.log(i);
        num++;
    }
}
// console.log(num);

/*
􀀂 Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.
*/
let cnt = 0;
while (cnt <= 60000) {
    if (cnt % 6 == 0) {
        // console.log(cnt);
    }
    cnt++;
}

/*
􀀂 Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo".
*/
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        // console.log("Coding");
        if (i % 10 == 0) {
            // console.log("Dojo");
        }
    } else {
        // console.log(i);
    }
}

/*
􀀂 What Do You Know?
Your function will be given an input parameter
incoming. Please console.log this value.
*/
const printMe = (incoming) => {
    console.log(incoming);
};

// printMe('testng');

/*
􀀂 Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and
console.log the final sum. Is there a shortcut?
*/

// slow way
let sum = 0;
for (let i = -300000; i < 300000; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
// console.log(sum);

// shortcut
let tmp = 300000/2
let pos_sum = temp * temp;
let neg_sum = -pos_sum
let master_sum = pos_sum + neg_sum;
// console.log(master_sum);

/*
􀀂 Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop.
*/
const countDownByFour = (num) => {
    console.log(num);
    if (num > 4) {
        return downByFour(num - 4);
    } else return;
}

// countDownByFour(2016);

/*
􀀂 Flexible Countdown
Based on earlier “Countdown by Fours”, given
lowNum, highNum, mult, print multiples of mult
from highNum down to lowNum, using a FOR.
For (2,9,3), print 9 6 3 (on successive lines).
*/
const countDownRangeByMult = (lowNum,highNum, mult) => {
    for (; highNum % mult != 0; highNum--);
    for (; highNum >= lowNum; highNum-=mult) {
            console.log(highNum);
        }
}

// countDownRangeByMult(2,9,3);

/*
􀀂 The Final Countdown
This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
print the multiples of param1, starting at param2 and extending to param3. One exception: if a
multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/
const countUpRangeByMultAndExclude = (mult, low, high, exclude) => {

    while (low % mult != 0 ) {
        low++;
    }
    while (low <= high) {
        if (low != exclude){
            console.log(low);
        }
        low+= mult;
    }
}

// countUpRangeByMultAndExclude(3,5,17,9);

/*
􀀂 Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/
const makeArray = (number) => {
    let array = [];
    for (; number >= 0; number--) {
        array.push(number);
    }
    return array;
}

let array = makeArray(10);
// console.log(`The array ${array} has ${array.length} elements`);

/*
􀀂 Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
*/
const printFirstReturnSecond = (arr) => {
    if (arr.length > 2) {
        return 'The array must be of length 2!';
    }
    console.log(`Logged: ${arr[0]}`);
    return arr[1];
}

// let result1 = printFirstReturnSecond([3,4]);
// let result2 = printFirstReturnSecond([3,4,5]);

// console.log(`Returned: ${result1}`);
// console.log(result2);

/*
􀀂 First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/
const firstPlusLength = (arr) => {
    return arr[0] + arr.length;
}

// console.log(firstPlusLength([9,8,7,6]));
// console.log(firstPlusLength(["what",8,7,6]));
// console.log(firstPlusLength([false,8,7,6]));

/*
􀀂 Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
*/
const greaterThanSec = (arr) => {
    let sec = arr[1];
    let count = 0;
    arr.forEach((num)=> {
        if (num > sec) {
            console.log(num);
            count++;
        }
    });
    return count;
}

// let res = greaterThanSec([1,3,5,7,9,13]);
// console.log(`Number of values greater than 2nd value: ${res}`);

/*
􀀂 Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values that are greater
than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
*/
const arrayGreaterThanSec = (arr) => {

    if (arr.length < 2) {
        console.log('the array must have at least 2 elements!');
        return arr;
    }

    let arr2 = [];
    let sec = arr[1];
    arr.forEach((num)=> {
        if (num > sec) {
            arr2.push(num);
        }
    });
    return arr2;
}

let array2 = arrayGreaterThanSec([9,6,8,2,4,3,12]);
// console.log(array2.length);

/*
􀀂 This Length, That Value
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
*/
const thisLengthThatValue = (num1, num2) => {
    let arr = []; 

    for (; num1 > 0; num1--) {
        arr.push(num2);
    }

    if (num1 == num2) {
        console.log("Jinx!");
    }

    return arr; 
}

let array3 = thisLengthThatValue(5,2); 
// console.log(array3);

/*
􀀂 Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/
const goldilocks = (arr) => {
    let len = arr.length;
    let val = arr[0]; 

    if (val > len) {
        console.log("Too big!");
    } else if (val < len) {
        console.log("Too small!"); 
    } else {
        console.log("Just right!"); 
    }
}

// goldilocks([1,2,3]);
// goldilocks([5,4,3]); 
// goldilocks([5,4,3,2,1]);

/*
􀀂 Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
*/
const fahrenheitToCelsius = (fDegrees) => {
    return (fDegrees - 32) / (9/5) 
}

// console.log(fahrenheitToCelsius(98)); 

/*
􀀂 Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
the equivalent temperature expressed in Fahrenheit degrees.
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward
(descending), checking whether it is equal to the corresponding Fahrenheit value.
*/
const celsiusToFahrenheit = (cDegrees) => {
    return (9/5 * cDegrees) + 32;
}

// console.log(celsiusToFahrenheit(36.67));


/*
􀀂 Biggie Size
Given an array, write a function that changes all
positive numbers in the array to “big”. Example:
makeItBig([-1,3,5,-5]) returns that same
array, changed to [-1,"big","big",-5].
*/
const makeItBig = (arr) => {
   return arr.map((num)=> {
        if (num > 0) {
            return "big";
        } else {
            return num;
        }
    });
}

// console.log(makeItBig([-1,2,3,-4,5]));

/*
􀀂 Print Low, Return High
Create a function that takes array of numbers.
The function should print the lowest value in the
array, and return the highest value in the array.
*/
const printLowReturnHigh = (arr) => {
    arr.sort((a,b) => a -b);
    
    console.log(arr[0]);

    return(arr[arr.length -1]); 
}

// console.log(printLowReturnHigh([3,7,1,9,8,3,0,3,8,7]))

/*
􀀂 Print One, Return Another
Build a function that takes array of numbers. The
function should print second-to-last value in the
array, and return first odd value in the array.
*/
const printOneReturnAnother = (arr) => {
    console.log(arr[arr.length - 2]); 
    let firstOdd = 0; 

    for (num of arr) {
        if (num % 2 != 0) {
            return num;
        }
    }
}

// console.log(printOneReturnAnother([2,2,3,5,5,6,7,12,9]));

/*
􀀂 Double Vision
Given array, create a function to return a new
array where each value in the original has been
doubled. Calling double([1,2,3]) should
return [2,4,6] without changing original.
*/
const double = (arr) => {
    return arr.map( x => x*2); 
}

let testArr = [3,4,7,6,5,1,8,9];
// console.log(double(testArr)); 
// console.log(testArr);

/*
􀀂 Count Positives
Given array of numbers, create function to
replace last value with number of positive values.
Example, countPositives([-1,1,1,1])
changes array to [-1,1,1,3] and returns it.
*/
const replaceLast = (arr) => {
    let arr2 = arr.filter(num => num > 0);
    let len = arr2.length; 
    arr[arr.length - 1] = len; 

    return arr; 
}

// console.log(replaceLast([-1,1,1,1]));

/*
􀀂 Evens and Odds
Create a function that accepts an array. Every
time that array has three odd values in a row,
print "That’s odd!" Every time the array has
three evens in a row, print "Even more so!"
*/
const evensAndOdds = (arr) => {
       let odds = 0; 
       let evens = 0;

       for (num of arr) {
           if (num % 2 != 0 ) {
               evens = 0;
               if (odds == 2) {
                   console.log("That's Odd!");
                   odds = 0;
               } else {
                   odds++; 
               }
           } else {
               odds = 0; 
               if (evens == 2) {
                   console.log("Even more so!");
                   evens = 0;
               } else {
                   evens++;
               }
           }
       }
}

// console.log(evensAndOdds([1,1,1,2,2,2,3,3,4,4,5,5,5,6,6,6]))

/*
􀀂 Increment the Seconds
Given arr, add 1 to odd elements ([1], [3],
etc.), console.log all values and return arr.
*/
const addOneToOddIndex = (arr) => {
   for (index in arr) {
       if (index % 2 != 0) {
           arr[index] += 1; 
       }
   }

   return arr;
}

const addOneToOddElement = (arr) => {
    for (index in arr) {
        if (arr[index] % 2 != 0) {
            arr[index] += 1; 
        }
    }

    return arr; 
}

// console.log("Odd index:"+ addOneToOddIndex([1,2,3,4,5,6]));
// console.log("Odd element:"+ addOneToOddElement([1,2,3,4,5,6]));

/*
􀀂 Previous Lengths
You are passed an array containing strings.
Working within that same array, replace each
string with a number – the length of the string at
previous array index – and return the array.
*/
const prevLength = (arr) => {
    let prev = 0; 

    for (i in arr) {
        let temp = arr[i].length; 
        arr[i] = prev; 
        prev = temp; 
    }
    return arr; 
}

// console.log(prevLength(["I", "feel", "pretty", "oh", "so", "pretty"]));

/*
􀀂 Add Seven to Most
Build function that accepts array. Return a new
array with all values except first, adding 7 to
each. Do not alter the original array.
*/
const addSevenToMost = (arr) => {
    arr.shift();
    return arr.map(num => num + 7);
}

let original = [1,2,3,4,5];
// console.log(addSevenToMost(original));
// console.log(original);

/*
􀀂 Reverse Array
Given array, write a function to reverse values,
in-place. Example: reverse([3,1,6,4,2])
returns same array, containing [2,4,6,1,3].
*/
const reverseArray = (arr) => {
    arr.reverse();
}

let testArr2 = [1,2,3,4,5,6,7,8];
// reverseArray(testArr2);
// console.log("Reversed: " + testArr2);

/*
􀀂 Outlook: Negative
Given an array, create and return a new one
containing all the values of the provided array,
made negative (not simply multiplied by -1).
Given [1,-3,5], return [-1,-3,-5].
*/
const makeNegative = (arr) => {
    return arr.map(num => {
        if (num < 0){
            return num;
        } else {
            return num*-1
        }
    });
}

let testArr3 = [1,2,-3,4,-5]; 
let res2 = makeNegative(testArr3);
// console.log('New: ' + res2);
// console.log('Original: ' + testArr3);
/*
􀀂 Always Hungry
Create a function that accepts an array, and
prints "yummy" each time one of the values is
equal to "food". If no array elements are
"food", then print "I'm hungry" once.
*/
const eatFood = (arr) => {
    let count = 0; 
    for (thing of arr) {
        if (thing == 'food') {
            count++;
            console.log('yummy');
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
}

let testArr4 = ['food', 'rocks', 2, true, 'sand', 'food'];
let testArr5 = ['other', 'candy', 5, 6, false]; 

// eatFood(testArr4);
// eatFood(testArr5);

/*
􀀂 Swap Toward the Center
Given array, swap first and last, third and third-tolast,
etc. Input[true,42,"Ada",2,"pizza"]
becomes ["pizza",42,"Ada",2,true].
Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
*/
const swap = (arr) => {
    let last = arr.length - 1; 
    for(i in arr) {
        if (i % 2 == 0 && i < last - i) {
            let temp = arr[i];
            arr[i] = arr[last - i];
            arr[last - i] = temp; 
        }
    }
}

let arr3 = [true,42,"Ada",2,"pizza"];
let arr4 = [1,2,3,4,5,6];

swap(arr3);
swap(arr4);

// console.log(arr3);
// console.log(arr4);

/*
􀀂 Scale the Array
Given array arr and number num, multiply each
arr value by num, and return the changed arr.
*/
const scaleArr = (arr, num) => {
    return arr.map(val => val*num); 
}

// console.log(scaleArr([3,4,5,6,7], 5));