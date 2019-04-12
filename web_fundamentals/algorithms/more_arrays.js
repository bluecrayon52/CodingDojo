/*
Return the given array, after setting any negative values to zero.  
For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
*/
const resetNegatives = (arr) => {
    return arr.map(num => num < 0 ? 0 : num);
}

// console.log(resetNegatives([1,2,0,0]));

/*
Given an array, move all values forward by one index, 
dropping the first and leaving a ‘0’ value at the end.  
For example moveForward( [1,2,3]) should return [2,3,0].
*/
const moveForward = (arr) => {
    arr.shift();
    arr.push(0);
    return arr;
}

// console.log(moveForward([1,2,3]));

/*
Given an array, return an array with values in a reversed order.  
For example, returnReversed([1,2,3]) should return [3,2,1].
*/
const returnReversed = (arr) => {
    for (let i = 0, j = arr.length - 1 ; i < j ; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// console.log(returnReversed([1,2,3]));

/*
Create a function that changes a given array to list each original element twice, 
retaining original order.  Have the function return the new array. 
For example repeatTwice( [4,”Ulysses”, 42, false] ) 
should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
*/
const repeatTwice = (arr) => {
    let len = arr.length*2;
    for (let i = 0; i < len; i+=2) {
        arr.splice(i+1, 0, arr[i]);
    }

    return arr;
}

// console.log(repeatTwice([4,"Ulysses", 42, false]));