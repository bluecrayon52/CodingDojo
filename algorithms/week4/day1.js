// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
const removeBlanks = (str) => {
    return [...str].filter((c ) => c != ' ').join('');
}

let testString = " Pl ayTha tF u nkyM usi c ";

let resString = removeBlanks(testString);

console.log(`resString: ${resString}`);
console .log(`testString: ${testString}`);

const removeBlanksV2 = (str) => {
    return str.split(' ').join('');
}

let testString2 = " L ay Dow n T he Bo ogi e ";

let resString2 = removeBlanksV2(testString2);

console.log(`resString2: ${resString2}`);
console.log(`testString2: ${testString2}`);

// String: Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

const getDigits = (str) => {
    // throw str into an array using spread operator 
    // parse each character in the array as an int 
    // filter out the characters that are not a number 
    // create a string from the joined elements of the array
    // parse the string into an integer 
   return parseInt([...str].filter((c) => !isNaN(parseInt(c))).join(''));
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

