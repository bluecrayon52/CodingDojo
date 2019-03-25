(() => { 

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
const get1to255 = () => {
    let arr = [];
    for (let i = 1; i <= 255; i++) {
        arr.push();
    }

    return arr;
}

// must fill array to use map function, 
// "callback is invoked only for indexes of the array which have assigned values, including undefined"
const get1toNum = (num) => {
    return new Array(num).fill(null).map((num ,i) => num = i + 1);
}
// console.log(get1toNum(5));

// avoid filling the array before using map with spread operators to expand the elements 
const get1toNumAlt = (num) => {
    return [...new Array(num)].map((n, i ) => i + 1);
}
// console.log(get1toNumAlt(5));

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.
const evenNumSum = (start, end) => {
    let sum = 0;
    if (start % 2 != 0) start++;
    for (; start <= end; sum+=start, start+=2);
    return sum;
}
// console.log(evenNumSum(1,1000));

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// (e.g. 1+3+5+...+4997+4999).
const oddNumSum = (start, end) => {
    let sum = 0;
    if (start % 2 == 0) start++;
    for (; start <= end; sum+=start, start+=2);
    return sum;
}
// console.log(oddNumSum(1, 500));

// Iterate an array - Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
const sumMe = (arr) => {
    return arr.reduce((sum, num) => sum + num);
}
// console.log(sumMe([1,2,5]));
// console.log(sumMe([-5,2,5,12]));

// Find max - Given an array with multiple values, 
// write a function that returns the maximum number in the array. 
// (e.g. for [-3,3,5,7] max is 7)
const findMax = (arr) => {
    return arr.reduce((max, num) => num > max ? num : max);
}

// console.log(findMax([-3,3,5,7]));

// Find average - Given an array with multiple values, 
// write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)
const findAvg = (arr) => {
    return arr.reduce((sum, num) => sum + num) / arr.length; 
}

// console.log(findAvg([1,3,5,7,20]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
const oddArray = (start, end) => {
    let arr = [];
    if (start % 2 == 0 ) {
        start++;
    }
    for (; start <= end; arr.push(start), start+=2); 
    return arr;
}

// console.log(oddArray(1,50));

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values 
// that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).
const greaterThan = (arr, y) => {
    let count = 0;
    arr.forEach(num => num > y ? count++ : null);
    return count;
}
// console.log(greaterThan([1,3,5,7], 3));

// Squares - Given an array with multiple values, 
// write a function that replaces each value in the array with the value squared by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])
const squareMe = (arr) => {
    return arr.map(num => num*num);
}
// console.log(squareMe([1,5,10,-12]));

// Negatives - Given an array with multiple values,
// write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. 
// (e.g. [1,5,10,-2] will become [1,5,10,0])
const replaceNegatives = (arr) => {
    return arr.map(num => num < 0 ? 0 : num);
}
// console.log(replaceNegatives([1,5,10,-2]));

// Max/Min/Avg - Given an array with multiple values, 
// write a function that returns a new array that only contains the maximum, minimum, 
// and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
const minMaxAvg = (arr) => {
    let temp = [];
    temp.push(arr.reduce((max, num) => num > max ? num : max));
    temp.push(arr.reduce((min, num) => num < min ? num : min));
    temp.push(arr.reduce((sum, num) => sum + num) / arr.length)
    return temp;  
}
// console.log(minMaxAvg([1,5,10,-2]));

// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. 
// (e.g. [1,5,10,-2] will become [-2,5,10,1]).
const swapFirstLast = (arr) => {

    // let last = arr.pop();
    // let first = arr.shift();
    // arr.splice(0, 0, last);
    // arr.push(first);

    let temp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;
    return arr;
}
// console.log(swapFirstLast([1,5,10, -2]));

// Number to String - Write a function that takes an array of numbers 
// and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
const replaceNegativesWithDojo = (arr) => {
    return arr.map(num => num < 0 ? 'Dojo' : num);
}
// console.log(replaceNegativesWithDojo([-1,-3,2]));

}) ();