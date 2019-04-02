(() => {
// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.
const pushBack = (arr, val) => {
    arr[arr.length] = val;
}

let testArr = [1,2,3,4];
pushBack(testArr, 10);
console.log(testArr);

const pushFront = (arr, val) => {
    let temp = arr[0];
    let temp2 = 0;
    arr[0] = val;
    for( let i = 1; i < arr.length; i++) {
        temp2 = arr[i];
        arr[i] = temp;
        temp = temp2; 
    }
    arr[arr.length] = temp;
}

const pushFrontV2 = (arr, val) => {
    for(i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
}

let testArr2 = [1,2,3,4];
pushFrontV2(testArr2, 10);
console.log(testArr2);

// Array: Insert At
// Given array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val) .
const insertAt = (arr, val, index) => {
    let temp = arr[index];
    let temp2 = 0;
    arr[index] = val;
    for( let i = index + 1; i < arr.length; i++) {
        temp2 = arr[i];
        arr[i] = temp;
        temp = temp2; 
    }
    arr[arr.length] = temp;
}

insertAtV2 = (arr, val, index) => {
    for(i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
}

let testArr3 = [1,2,3,4];
insertAtV2(testArr3, 10, 2);
console.log(testArr3);

// Array: Pop Front
// Given array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop() .
const popFront = (arr) => {
    let front = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]; 
    }
    arr.pop()
    return front;
}

let testArr4 = [1,2,3,4];
popFront(testArr4);
console.log(testArr4);

// Array: Remove At
// Given array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop() . Think of popFront(arr) as equivalent to removeAt(arr,0) .

const removeAt = (arr, index) => {
    let val = arr[index];
    for(let i = index; i < arr.length; i++){
        arr[i] = arr[i + 1]; 
    }
    arr.pop()
    return val;
}

let testArr5 = [1,2,3,4];
removeAt(testArr5, 2);
console.log(testArr5);

// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
// Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
const minToFront = (arr) => {
    let min = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    pushFront(arr, removeAt(arr, index));
}

let testArr6 = [2,3,4,1,5];
minToFront(testArr6);
console.log(testArr6);

})()