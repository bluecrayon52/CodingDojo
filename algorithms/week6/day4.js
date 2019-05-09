(() => {
// Missing Value
// You are given an array of length N that contains, in no particular order, integers from 0 to N . 
// One integer value is missing. Quickly determine and return the missing value. 
// Given ([3,0,1]) , return 2 .
// Second: now the lowest value can now be any integer (including negatives), instead of always being 0 . 
// Given ([2,-4,0,-3,-2,1]) return -1 . Given ([5,2,7,8,4,9,3]) , return 6 .

let missingVal = (arr) => {
    // find lowest
    let negLow = arr.reduce((acc, cur) => cur < acc ? cur : acc , arr[0])
    // find highest
    let high = arr.reduce((acc, cur) => cur > acc ? cur : acc , arr[0])
    // iterate over range to find missing value
    for (let i = negLow + 1; i < high; i++){
        if (!arr.includes(i)){
            return i;
        }
    }
}

// console.log(missingVal([3,0,1]));
// console.log(missingVal([2,-4,0,-3,-2,1]));
// console.log(missingVal([5,2,7,8,4,9,3]));

let missingVal2 = (arr) => {
    let negSum = 0, posSum = 0, firstNeg = true, firstPos = true, foundZero = false; 
    let negLow = 0, negHigh = 0, posLow = 0, posHigh = 0, negTotal = 0, posTotal = 0;
    for (val of arr) {
        // if negative ...
        if (val < 0) {
            // subtract from negative sum
            negSum+=val;
            // if this is the first negative number, set negLow and negHigh
            if (firstNeg) {
                negLow = val;
                negHigh = val;
                firstNeg = false;
            }
            // if lower than negLow, make negLow
            else if (val < negLow) {
                negLow = val;
            }
            // if higher than negHigh, make negHigh 
            else if (val > negHigh) {
                negHigh = val;
            }
        }
        // if positive ... 
        else if (val > 0) {
            // add to positive sum
            posSum+=val;
            // if this is the first positive number, set posLow and posHigh
            if (firstPos) {
                posLow = val;
                posHigh = val;
                firstPos = false;
            }
            // if lower than posLow, make posLow 
            else if (val < posLow) {
                posLow = val;
            }
            // if higher than posHigh, make posHigh 
            else if (val > posHigh) {
                posHigh = val;
            }
        } else {
            foundZero = true;
        }
    }
    // range spanning negative and positive must include zero
    if (!firstNeg && !firstPos && !foundZero) {
        return 0;
    }
    // calculate negative total if any negative numbers found
    if (!firstNeg) {
        // if no zero found, assume negHigh to be the highest expected negative number
        if (!foundZero) {
            negTotal = - ( negLow * (negLow - 1) / 2  - (negHigh + 1) * (negHigh) / 2 );
        // if zero found, require -1 to be the highest expected negative number
        } else {
            negTotal = - ( negLow * (negLow - 1) / 2 );
        }
        if (negTotal) {
            // subtract negative sum from negative total 
            let missing = negTotal - negSum;
            // if less than zero, return 
            if (missing < 0) {
                return missing;
            }
        }
    }
    // calculate positive total if any positive numbers found 
    if (!firstPos) {
        // if no zero found, assume posLow to be lowest expected positive number
        if (!foundZero) {
            posTotal = posHigh*(posHigh + 1) / 2 - (posLow - 1) * posLow / 2;
        // if zero found, require 1 to be lowest expected positive number
        } else {
            posTotal = posHigh*(posHigh + 1) / 2;
        }

        if (posTotal) {
            // subtract positive sum from positive total 
            let missing = posTotal - posSum;
            // if greater than zero, return 
            if (missing > 0) {
                return missing;
            }
        }
    }

    // return false for no missing values
    return false;
}
console.log(missingVal2([2,-4,0,-3,-2,1]));  // expect -1
console.log(missingVal2([2,-4,-3,-2, -1, 1])); // expect 0
console.log(missingVal2([2,-4,-3,-2, -1, 0])); // expect 1
console.log(missingVal2([4,3,1,0])); // expect 2
console.log(missingVal2([4,3,1])); // expect 2
console.log(missingVal2([-1,-4,-2,0])); // expect -3
console.log(missingVal2([-1,-4,-2])); // expect -3
console.log(missingVal2([1,2,3,4,5,6])) // expect false

})()
