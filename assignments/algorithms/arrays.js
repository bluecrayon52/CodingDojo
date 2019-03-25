(()=> {
// Given an array and a value Y, count and print the number of array values greater than Y.
const countGreaterThan = (arr, y) => {
    let count = 0;
    arr.forEach((num) => {
        if (num > y) {
            count++;
        }
    });
    return count;
}


// Given an array, print the max, min and average values for that array.
const minMaxAvg = (arr) => {
    let min = arr.reduce((min, num) => num < min ? num : min);
    let max = arr.reduce((max, num) => num > max ? num : max);
    let avg = arr.reduce((sum, num) => sum + num) / arr.length; 

    console.log(`min:${min}, max:${max}, avg:${avg}`)
}

/* 
Given an array of numbers, create a function that returns a new array 
where negative values were replaced with the string ‘Dojo’.  
For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5]. 
*/
const replaceNegatives = (arr) => {
    return arr.map(num => num < 0 ? 'Dojo' : num);
}

// console.log(replaceNegatives([1,2,-3,-5,5]));

/*
Given array, and indices start and end, remove vals in that index range, 
working in-place (hence shortening the array).  
For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
*/
const shortenMe = ( arr, start, end) => {
    arr.splice(start, end - start + 1);
    return arr;
}
// console.log( shortenMe([20,30,40,50,60,70],2,4));

})();

