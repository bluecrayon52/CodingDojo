(() => {
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


})();