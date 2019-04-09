// String: Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed. 
// Given "creature" , return "erutaerc" . Tempting as it seems, do not use the built-in reverse()!
const reverseString = (str) => {
    let temp = '';
    for (let i = str.length - 1; i >= 0; i--) {
        temp+=str[i];
    }
    return temp;
}

console.log(reverseString("helllooooo"));

// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. 
// In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 
// 349 is CCCIL and 444 is CDXLIV.
const intToRomanNumerals = (str) => {

}

// hoisted from http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function romanize (num) {
    // is not a number
	if (!+num)
        return false;
    // convert to string then split into array 
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
        i = 3;

        console.log(`i: ${i}`);
        console.log(`digits: ${digits}`);
        console.log(`roman: ${roman}`);
        console.log('--------------------------------')

    // loop stops when i == 0 because it is falsey
    while (i--) {
        // pop off last element, convert to int (with +) add to 20 or 10, or 0 (depending on i in loop)
        // example: key[4 + 20] = key[24] = "IV"
        //          key[4 + 10] = key[14] = "XL"
        //          key[4 + 0] = key[4]= "CD"
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;

        console.log(`i: ${i}`);
        console.log(`digits: ${digits}`);
        console.log(`roman: ${roman}`);
        console.log('--------------------------------')
    }
    // convert what's left of digits array (if > 999) back into joined string then to int (with +) and add 1
    // initialize an empty array of that size 
    // convert that array to a string of Ms 
    // add roman to the end of Ms string 
    console.log(`digits.join(""): ${digits.join("")}`);
    console.log(`+digits.join(""): ${+digits.join("")}`);
    console.log(`+digits.join("") + 1: ${+digits.join("") + 1}`);
    console.log(`Array(+digits.join("") + 1): ${Array(+digits.join("") + 1)}`);
    console.log(`Array(+digits.join("") + 1).join("M"): ${Array(+digits.join("") + 1).join("M")}`);
    console.log(`Array(+digits.join("") + 1).join("M") + roman: ${Array(+digits.join("") + 1).join("M") + roman}`);
	// return Array(+digits.join("") + 1).join("M") + roman;
}

console.log(romanize(444));