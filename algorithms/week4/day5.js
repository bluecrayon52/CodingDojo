// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. 
// Some of ‘those fugueing challenges’ are less popular than others, so he needs an index. Given a sorted array of 
// pages where a term appears, produce an index string. Consecutive pages should form ranges separated by a hyphen. 
// For [1,13,14,15,37,38,70] , return string "1, 13-15, 37-38, 70" . 
// Take care to get all the commas and spaces correct: 
// Martin is palpably particular (practically persnickety!) about patchy punctuation.

const toIndexString = (arr) => {
    let str = '';
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i + 1] == arr[i] + 1) {
            str+=`${arr[i]}-`
            i++;
            while (arr[i + 1] == arr[i] + 1) {
                i++;
            }
            str+=`${arr[i]},`
        } else {
            if (i == arr.length - 1) {
                str+=`${arr[i]}`
            } else {
                str+=`${arr[i]},`
            }
        }
    }
    return str;
} 

console.log(toIndexString([1,13,14,15,37,38,70]));

// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. 
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. 
// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true] , return {"abc": 42, 3: "wassup", "yo": true}.
const zipToMap = (keys, vals) => {
    if (keys.length != vals.length) {
        return false;
    } 
    let map = {};
    let i = 0; 
    for (const key of keys) {
        map[`${key}`] = vals[i];
        i++;
    }
    return map;
}

console.log(zipToMap(["abc", 3, "yo"],[42, "wassup", true]));