(() => {
    // Rain Terraces
    // The Seattle Coding Dojo wants to send excess water to the Burbank Coding Dojo, 
    // so it landscapes its rooftop with a set of unusual elevated terraces. 
    // The terraces are all the same width, but have varying heights. 
    // When it rains, water gathers in the low terraces that are surrounded by taller ones. 
    // For example, if we have terraces with heights [3,1,1,4,2] , then as much as 4 units of water could be gathered, 
    // because water would pool 2-deep on two different terraces (both of the 1-high terraces: between the 3-high and 4-high terraces). 
    // Water on the other terraces just runs off the sides. 
    // Given an array of terrace heights, return the maximum amount of water that is trapped when rains come.
    let rainCatcher = (arr) => {
       let total_water = 0;
       let global_max = {value: 0, index: -1};
       let local_max = {value: 0, index: -1};
        
       // find global max 
       for (let i = 0; i < arr.length; i++) {
            if (arr[i] > global_max.value) {
                global_max.value = arr[i];
                global_max.index = i;
            }
       }
       
       // loop through ignoring ends as no water can stand on them
       for (let i = 1; i < arr.length - 1; i++) {
           
            // if to the right of max 
            if (i > global_max.index) {
                // find local max to the right if not yet set or hit
                if (i >= local_max.index) {
                    // clear old value if present
                    local_max.value = 0;
                    for(j = i + 1; j < arr.length; j++) {
                        if (arr[j] > local_max.value) {
                            local_max.value = arr[j];
                            local_max.index = j;
                        }
                    }
                } 
                // if not sitting on local max and not same as local max
                if (arr[i] < local_max.value) {
                    total_water += local_max.value - arr[i]; 
                }

            // if to the left of global max
            } else if ( i < global_max.index) {
                // find local max if going down hill and local max is overtaken 
                if (arr[i - 1] > arr[i] && arr[i - 1] > local_max.value) {
                    local_max.value = arr[i -1];
                    local_max.index = i - 1;
                }
                // if not sitting on local max and not same as local max
                if (arr[i] < local_max.value) {
                    total_water += local_max.value - arr[i];
                }
            }
       }
       return total_water;
    }
    console.log(rainCatcher([5,3,2,1,2,4,3,2,1,3]));  // expect 11
    console.log(rainCatcher([1,2,4,3,2,1,3])); // expect 3
    console.log(rainCatcher([3,5,2,6,3,7,4,6,2]));  // expect 8
    console.log(rainCatcher([3,5,2,6,3,4,4,6,2])); // expect 10
    console.log(rainCatcher([7,7,5,5,3,6,10,3,9,-1,1])); // expect 17

})()