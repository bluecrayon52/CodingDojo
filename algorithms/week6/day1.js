(() => {
    // Balance Point
    // Write a function that returns whether the given array has a balance point between indices, 
    // where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3&4 ), 
    // but [1,2,4,2,1] → false .
    let balancePoint = (arr) => {
        let left = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            left+=arr[i];
            let right = 0;
            for (let k = i+1; k < arr.length; k++){
                right+=arr[k];
            }
            if (left == right){
                return true;
            }
        }
        return false;
    }

    // Balance Index
    // Here, a balance point is on an index, not between indices. 
    // Return the balance index where sums are equal on either side (exclude its own value). 
    // Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 .
    let balanceIndex = (arr) => {
        let left = 0;
        for (let i = 0; i < arr.length - 2; i++) {
            left+=arr[i];
            let right = 0;
            for (let k = i+2; k < arr.length; k++){
                right+=arr[k];
            }
            if (left == right){
                return i+1;
            }
        }
        return -1;
    }
console.log('-------------------balancePoint----------------------')
console.log(`[1,2,3,4,10] → ${balancePoint([1,2,3,4,10])}`);
console.log(`[1,2,4,2,1] → ${balancePoint([1,2,4,2,1])}`);
console.log('-------------------balanceIndex----------------------')
console.log(`[-2,5,7,0,3] → ${balanceIndex([-2,5,7,0,3])}`);
console.log(`[9,9] → ${balanceIndex([9,9])}`);
})()

