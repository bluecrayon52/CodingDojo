(()=> {
// Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. 
// Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage 
// of the fact that the array is sorted . As always, only use built-in functions that you 
// are prepared to recreate (write yourself) on demand!
let binSearch = (arr, val) => {
    // negative case
    if (arr.length == 1 && arr[0] != val) {
        return false;
    }
    let check = arr[Math.floor(arr.length/2)];
    console.log(`check: ${check}`)

    // positive case
    if (check == val) {
        return true;
    // check lower array subset 
    } else if (check > val) {
        console.log(`lower subset: ${arr.slice(0, Math.floor(arr.length/2))}`)
        return binSearch(arr.slice(0, Math.floor(arr.length/2)), val)
    // check higher array subset
    } else if (arr.length == 2){
        console.log(`higher subset: ${arr.slice(Math.floor(arr.length/2))}`)
        return binSearch(arr.slice(Math.floor(arr.length/2)), val)
    } else {
        console.log(`higher subset: ${arr.slice(Math.floor(arr.length/2) + 1)}`)
        return binSearch(arr.slice(Math.floor(arr.length/2) + 1), val)
    }
}
console.log(binSearch([2,6,8,12,15], 5))
console.log('------------------------')
console.log(binSearch([2,8,12,15], 5))
console.log('------------------------')
console.log(binSearch([2,5,6,12,15], 5))
console.log('------------------------')
console.log(binSearch([1,2,3,5,7,8], 7))

// String: Binary Search
// You will be given a very long string and a single character. Return whether that character is 
// present in the string. Note: the characters in the string have been arranged so that the charCodeAt() 
// values for each character are monotonically ascending from the beginning of the string to the back. 
// Use the fact that the string is effectively sorted. Don’t use built-in functions. Note: characters may 
// not be exactly as you might have considered ‘alphabetized’, but char.charCodeAt() works well. 
// Example: if your function is given the inputs (" &-0379DEFXZ[abcz|", "6") , it should return false . 
// If instead it is sent (" &-0379DEFXZ[abcz|", "c") , return true . Remember, don’t iterate the string linearly!
let binSearchString = (str, val) => {
    let arr = str.split('').map(x => x.charCodeAt(0));
    let code = val.charCodeAt(0);
    return binSearch(arr, code);
}
console.log(binSearchString(" &-0379DEFXZ[abcz|", "6"))
console.log(binSearchString(" &-0379DEFXZ[abcz|", "c"))

})()