// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. 
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. 
// Given "N(0(p)3" , return false : not every parenthesis is closed. Given "N(0)t ) 0(k", return false, 
// because the underlined ")" is premature: there is nothing open for it to close.
const validateParens = (str) => {
    let count = 0;
    for (char of str) {
        if (char == '(') {
            count ++;
        }
        else if (char == ')'){
            if (count == 0) {
                return false;
            }
            else {
                count --;
            }
        }
    }
    if (count) {
        return true;
    }
    return false;
}

console.log(validateParens("Y(3(p)p(3)r)s"));
console.log(validateParens("N(0(p)3"));
console.log(validateParens("N(0)t ) 0(k"));

// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, 
// because (if we ignore spaces, punctuation and capitalization) the letters are the same when reading 
// from the back to the front.

// String: Is Palindrome
// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: 
// if given "Dud" or "oho!" , return false.
// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.
const isPalindrome = (str) => {
    if (str.split('').reverse().join('') === str) {
        return true;
    }
    return false;
}

const isPalindromeV2 = (str) => {
    let arr = str.split('').filter(x => /[A-Za-z]/.test(x)).map(x => x.toLowerCase());
    // console .log(arr);
    let clean_str = arr.join('');
    // console.log(clean_str);
    let rev_str = arr.reverse().join('');
    // console.log(rev_str);

    if (clean_str == rev_str) {
        return true;
    }
    return false;
}

console.log(isPalindrome("Able was I, ere I saw Elba"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("a x a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("oho!"));

console.log(isPalindromeV2("Able was I, ere I saw Elba"));
console.log(isPalindromeV2("Madam, I'm Adam"));
console.log(isPalindromeV2("Dud"));
console.log(isPalindromeV2("oho!"));



