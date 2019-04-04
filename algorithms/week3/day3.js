(() => {
// Array: Reverse 
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices 
// that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array 
// – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().
const reverseMe = (arr) => {
    let temp = 0;
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let testArr = [7,5,1,3,2];
reverseMe(testArr);
console.log(testArr);

// Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr ’s values to th e right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1) , change the array to [3,1,2]. 
// Don’ t use built-in functions. 
// Second: allow negative shiftBy (shift L, not R). 
// Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions. 
// Fourth: minimize the touches of each element.
const rotateMe = (arr, shiftBy) => {
    let temp = 0; 
    let temp2 = 0;
    if (shiftBy < 0) {
        for(let i = 0; i < Math.abs(shiftBy); i++) {
            // console.log(`----before outer for loop----:\n
            // --- arr: ${arr}\n`)
            temp = arr[arr.length - 1];
            arr[arr.length - 1] = arr[0];
            // console.log(`----after outer for loop----:\n 
            // --- arr: ${arr}, moved front element, ${arr[0]}, to the back\n
            // --- stored the last element, ${temp}, as temp\n`)
            for(let j = arr.length - 2; j >= 0; j--) {
                // console.log(`----before inner for loop----:\n
                // --- arr: ${arr}\n`)
                temp2 = arr[j];
                arr[j] = temp; 
                temp = temp2; 
                // console.log(`----after inner for loop----:\n 
                // --- stored the value at arr[${j}], ${temp2}, as temp2\n
                // --- arr: ${arr}, moved temp element, ${arr[j]}, into the arr[${j}] position\n
                // --- updated temp to the value of temp2, ${temp}, the old value at arr[${j}]\n`)
            }
        }

    }  else {
        for(let i = 0; i < shiftBy; i++) {
            // console.log(`----before outer for loop----:\n
            // --- arr: ${arr}\n`)
            temp = arr[0];
            arr[0] = arr[arr.length - 1];
            // console.log(`----after outer for loop----:\n 
            // --- arr: ${arr}, moved back element, ${arr[0]}, to the front\n
            // --- stored the front element, ${temp}, as temp\n`)
            for(j = 1; j < arr.length; j++) {
                 // console.log(`----before inner for loop----:\n
                // --- arr: ${arr}\n`)
                temp2 = arr[j];
                arr[j] = temp; 
                temp = temp2; 
                // console.log(`----after inner for loop----:\n 
                // --- stored the value at arr[${j}], ${temp2}, as temp2\n
                // --- arr: ${arr}, moved temp element, ${arr[j]}, into the arr[${j}] position\n
                // --- updated temp to the value of temp2, ${temp}, the old value at arr[${j}]\n`)
            }
        }
    }
}

let testArr2 = [2,4,3,6,5,7];
rotateMe(testArr2, 2);
console.log(testArr2);
rotateMe(testArr2, -2);
console.log(testArr2);
})()