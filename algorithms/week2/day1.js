(()=> {
/*   
Print 1-255
print1To255()
Print all the integers from 1 to 255.
*/
const print1To255 = () => {
    for (let i = 0; i <= 255; i++) {
        console.log(i);
    }
}

/*
Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far.
*/
const printIntsAndSum0To255 = () => {
    let sum = 0; 
    for (let i = 0; i <= 255; i++) {
        console.log(`i is now ${i}`);
        sum += i;
        console.log(`sum is now ${sum}`);
    }
}

/*
Print Max of Array
printMaxOfArray(arr)
Given an array, find and print its largest element.
*/
const printMaxOfArray = (arr) => {
    let max = 0;
    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
/*
Return Odds Array 1-255
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).
*/
const returnOddsArray1To255 = () => {
    let arr = [];
    for (let i = 1; i <= 255; i+=2) {
        arr.push(i);
    }
    return arr;
}

/*
Return Array Count Greater than Y
returnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.
*/
const returnArrayCountGreaterThanY = (arr, y) => {
    let count = 0;
    for (const num of arr) {
        if (num > y) {
            count++;
        }
    }
    return count;
}

/*
Print Max, Min, Average Array Values
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.
*/
const printMaxMinAverageArrayVals = (arr) => {
    let min = arr[0], max = arr[0], sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`max: ${max}, min: ${min}, avg: ${sum / arr.length}`);
}

/*
Swap String for Array Negative Values
swapStringForArrayNegativeVals(arr) 
Given an array of numbers, replace any negative values with the string 'Dojo' .
*/
const swapStringForArrayNegativeVals = (arr) => {
    return arr.map(num => num < 0 ? 'Dojo' : num);
} 


/*
Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255.
*/
const printOdds1To255 = () => {
    for (let i = 1; i <= 255; i+=2) {
        console.log(i);
    }
}

/*
Print Array Values
printArrayVals(arr)
Iterate through a given array, printing each value.
*/
const printArrayVals = (arr) => {
    arr.forEach(num => console.log(num));
}

/*
Print Average of Array
printAverageOfArray(arr)
Analyze an array’s values and print the average.
*/
const printAverageOfArray = (arr) => {
   let sum = arr.reduce((sum, num) => sum + num);
   return sum / arr.length;
}

/*
Square Array Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.
*/

// pass-by-reference for complex data types
const squareArrayVals = (arr) => {
    // map creates a new array in another memory location
    return arr.map(num => num*num);
}

let arr = [1,5,3,6,2,7];

let arr2 = squareArrayVals(arr);

// console.log(arr);  // NOT squared
// console.log(arr2); // squared 

// pass-by-reference for complex data types
const squareArrayVals2 = (arr) => {
    // values at memory location of arr modified 
    for (let i = 0; i < arr.length; i++) {
        arr[i]*=arr[i];
    }

    return arr;
}

let arr3 = [1,4,3,6,7,5];

let arr4 = squareArrayVals2(arr3);

// console.log(arr3)  // modified array
// console.log(arr4); // another pointer to the same modified array

squareArrayVals2(arr4);  // modifies both arr2 and arr3 (pointing to same memory location)

// console.log(arr3);  // squared 
// console.log(arr4);  // squared


/*
Zero Out Array Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.
*/
const zeroOutArrayNegativeVals = (arr) => {
    return arr.map(num => num < 0 ? 0 : num);
}


/*
Shift Array Values Left
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, 
dropping the first value and leaving a 0 (zero) value at the end of the array.
*/
const shiftArrayValsLeft = (arr) => {
    arr.shift();
    arr.push(0);
    return arr;
}

})();