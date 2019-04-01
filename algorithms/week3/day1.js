(()=> {

const swapPairs = (arr) => {
    for (let i = 0; i < arr.length; i+=2) {
        if (arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp; 
        }
    }
}

let testArr = [1,2,3,4,5];
let testArr2 = [1,2,3,4,5,6];

swapPairs(testArr);
swapPairs(testArr2);

console.log(testArr);
console.log(testArr2);

const removeAt = (arr, i ) => {
    let val = arr[i];
    for (; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    return val;
}

const removeDuplicates = (arr) => {
    let dup = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == dup) {
            removeAt(arr, i);
            i--; 
        } else {
            dup = arr[i];
        }
    }
}

let testArr3 = [1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7];

removeDuplicates(testArr3);

console.log(testArr3);
})();