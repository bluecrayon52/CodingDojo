// Sigma - Implement function sigma(num) that, given a number, 
// returns the sum of all positive integers up to the given number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
const sigma = (num) => {
    let sigma = 1 ;
    for(let i = 2; i <= num; sigma+=i, i++);
    return sigma;
}
// console.log(sigma(3));
// console.log(sigma(5));

// Factorial - Write a function factorial(num) that, given a number, 
// returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
const factorial = (num) => {
    let fact = 1; 
    for(let i = 2; i <= num; fact*=i, i++);
    return fact;
}
// console.log(factorial(3));
// console.log(factorial(5));

// Fibonacci - Create a function to generate Fibonacci numbers.  
// In this famous mathematical sequence, each number is the sum of the previous two, 
// starting with values 0 and 1.  Your function should accept one argument, 
// an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
// fibonacci(7) = 13 (5+8).  Do this without using recursion first.  
// If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
const fibonacci = (seq) => {
    if (seq == 0 ) {
        return 0;
    } else if (seq == 1) {
        return 1
    } else {
        return fibonacci(seq - 2) + fibonacci(seq - 1);
    }
}

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));

// Array: Second-to-Last: Return the second-to-last element of an array. 
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
const secondToLast = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
}
// console.log(secondToLast([42, true, 4, "Liam", 7]));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  
// Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
const nthToLast = (arr, n) => {
    if (n > arr.length) {
        return null;
    }
    return arr[arr.length - n];
}
// console.log(nthToLast([5,2,3,6,4,9,7],3));

// Array: Second-Largest: Return the second-largest element of an array. 
// Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
const secondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    arr = arr.filter(num => num != Math.max(...arr));
    return arr.filter(num => num == Math.max(...arr))[0];
}

// console.log(secondLargest([42,1,4,3.14,7]));

// Double Trouble: Create a function that changes a given array to list each existing element twice, 
// retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
const doubleTrouble = (arr) => {
    let doubles = []; 
    for( items of arr) {
        doubles.push(items);
        doubles.push(items);
    }

    return doubles;
}
// console.log(doubleTrouble([4, "Ulysses", 42, false]));

const doubleTroubleV2 = (arr) => {
    let len = arr.length*2; 
    for (i = 0; i < len; i+=2){
        arr.splice(i+1, 0, arr[i]);
    }
    return arr; 
}
// console.log(doubleTroubleV2([4, "Ulysses", 42, false]));