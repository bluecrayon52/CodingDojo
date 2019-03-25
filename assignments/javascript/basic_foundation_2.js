// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

const posToBig = (arr) => {
    return arr.map(num => num > 0 ? 'big' : num);
}
// console.log(posToBig([-1,3,5,-5]));

// Print Low, Return High - Create a function that takes in an array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.
const printLowReturnHigh = (arr) => {
    console.log(arr.reduce((min,num) => num < min ? num : min));
    return arr.reduce((max,num) => num > max ? num : max);
}

// Print One, Return Another - Build a function that takes in an array of numbers.  
// The function should print the second-to-last value in the array, and return the first odd value in the array.
const printOneReturnAnother = (arr) => {
    console.log(arr[arr.length - 2]);
    for (num of arr) {
        if (num % 2 != 0 ) {
            return num;
        }
    }
}

// Double Vision - Given an array (similar to saying 'takes in an array'), 
// create a function that returns a new array where each value in the original array has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing the original array.
const doubleMe = (arr) => {
    return arr.map(num => num*2);
}
// console.log(doubleMe([1,2,3]));

// Count Positives - Given an array of numbers, 
// create a function to replace the last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
const countPositives = (arr) => {
    arr[arr.length -1] = arr.reduce((acc, num) => num > 0 ? acc + 1 : acc, 0);
    return arr;
}
// console.log(countPositives([-1,1,1,1]));

// Evens and Odds - Create a function that accepts an array.  
// Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!".
const threeEvenThreeOdd = (arr) => {
    let odd = 0;
    let even = 0;

    for (num of arr) {
        if (num % 2 != 0 ) {
            even = 0;
            odd++;
            if (odd >= 3) {
                console.log("That's odd!");
            }
        } else {
            odd = 0;
            even++;
            if (even >= 3) {
                console.log("Even more so!");
            }
        }
    }
}

// threeEvenThreeOdd([3,5,7,9,11,2,5,2,4,6,8])

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.
const incTheSec = (arr) => {
    return arr.map((num, i) => i % 2 != 0 ? num + 1 : num);
}
// console.log(incTheSec([1,2,3,4,5]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
// Working within that same array, replace each string with a number 
// - the length of the string at the previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
const prevLength = (arr) => {
    return arr.map((str, i, arr) => i > 0 ? arr[i - 1].length : str);
}

// console.log(prevLength(["hello", "dojo", "awesome"]));

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, 
// but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
const addSeven = (arr) => {
    return arr.map(num => num + 7);
}

// console.log(addSeven([1,2,3]));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  
// Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
// Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
const reverseArray = (arr) => {
    for (let i = 0, j = arr.length -1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

// console.log(reverseArray([3,1,6,4,2]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
const allNegative = (arr) => {
    return arr.map(num => num > 0 ? num*-1: num);
}

// console.log(allNegative([1,-3,5]));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array values are "food", then print "I'm hungry" once.
const alwaysHungry = (arr) => {
    let count = arr.filter(str => str =='food').length;
    if (!count) {
        console.log("I'm hungry");
    } else {
        for (i = 0; i < count; i++) {
            console.log('yummy');
        }
    }
}

// alwaysHungry([1,2,3,'food', 'food', 4,5,7,'food']);
// alwaysHungry([1,2,3,4,5]);

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc. 
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
const swapTowardCenter = (arr) => {
    for(i = 0, j = arr.length - 1; i < j; i+=2, j-=2) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
// console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));
// console.log(swapTowardCenter([1,2,3,4,5,6]));

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, 
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
const scaleArray = (arr, num) => {
    return arr.map(n =>  n*num);
}
// console.log(scaleArray([1,2,3], 3));