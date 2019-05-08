(() => {
// Array: Flatten
// Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a 
// new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4] .
// Second: work ‘in-place’ in the given array (do not create another). 
// Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2] .
// Third: make your algorithm both in-place and stable . Do you need a return value?
let flatten = (arr) => {
    let arr2 = [];
    for(el of arr) {
        if (Array.isArray(el)) {
            for (val of el){
                arr2.push(val)
            }
        } else {
            arr2.push(el);
        }
    }
    return arr2;
}

console.log(flatten([1,[2,3],4,[]]))

// Array: Remove Duplicates
// Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). 
// For [1,2,1,3,4,2] return [1,2,3,4] .
// Second: work ‘in-place’ in given array. Alter order if needed ( stability is not required). 
// Ex.: [1,2,1,3,4,2] could become [1,2,4,3] .
// Third: make it in-place and stable .
// Fourth: eliminate any second (inner) loop.
let removeDups = (arr) => {
    let arr2 = [];
    let dict = {};
    for(el of arr) {
        if (!(el in dict)){
            arr2.push(el)
            dict[el] = 1;
        }
    }
    return arr2;
}

console.log(removeDups([1,2,1,3,4,2]))
console.log([...new Set([1,2,1,3,4,2])])

})()