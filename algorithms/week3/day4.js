(() => {
// Array: Concat
// Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] .
const smash = (arr1, arr2) => {
    let res = [];
    for (const val of arr1) {
        res.push(val);
    }
    for (const val of arr2) {
        res.push(val)
    }
    return res; 
}

let testArr = [13,5,1,4];
let testArr2 = [5,8,9,5,7];
let testArr3 = smash(testArr, testArr2);
console.log(testArr);
console.log(testArr2);
console.log(testArr3);

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
// Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away.
// Array [-1,7,3] would represent three buildings: first is actually out of view below street level, 
// behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). 
// You are situated at street level. Return array containing heights of buildings you can see, in order. 
// Given [-1,1,1,7,3] return [1,7]. 
// Given [0,4] return [4]. 
// As always with challenges, do not use built-in array functions such as unshift().
const inSight = (arr) => {
    let lOS = [];
    let tallest = 0; 
    for (const val of arr) {
        if (val > tallest) {
            tallest = val; 
            lOS.push(tallest);
        }
    }
    return lOS;
}

let testArr4 = [-1,1,1,7,3];
let testArr5 = inSight(testArr4);
console.log(testArr4);
console.log(testArr5);

})()