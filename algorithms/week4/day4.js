// Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. 
// Examples: 
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. 
// "D(i{a}l[ t]o)n{e" => false. 
// "A(1)s[O (n]0{t) 0}k" => false.
const bracesValid = (str) => {
    let stack = [];

    for (char of str) {
        if (char == "(" || char == "{" || char == "[") {
            stack.push(char);
            console.log(`stack push: ${stack}`);
        }
        else if (char == ")" || char == "}" || char == "]"){
            let check = stack.pop();
            console.log(`check: '${check}' against '${char}'`);
            if (check == "(") {
                if (char != ")") {
                    return false;
                }
            }
            else if (check == "{") {
                if (char != "}") {
                    return false;
                }
            }
            else if (check == "[") {
                if (char != "]") {
                    return false;
                }
            }
        }
    }
    if (stack.length > 0 ) {
        return false;
    }
    return true;
}

// console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
// console.log(bracesValid("D(i{a}l[ t]o)n{e"))
// console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))

// Longest Palindrome
// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. 
// Return the longest palindromic substring. 
// Given "what up, daddy-o?" , return "dad". 
// Given "uh... not much", return "u". 
// Include spaces as well (i.e. be strict, as in previous challenge): 
// given "Yikes! my favorite racecar erupted!" , return "e racecar e".
// Strings longer or shorter than complete words are OK.
// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. 
// Given "Hot puree eruption!" , return "tpureeerupt".
const longestPal = (str) => {
    let arr = str.split('')
    let pal = arr[0];
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] == arr[j]) {
                console.log(`${arr[i]} == ${arr[j]}`)
                let match = true;
                for (let m = i + 1, n = j -1; m < n; m++, n--) {
                    if (arr[m] != arr[n]) {
                        console.log(`${arr[m]} != ${arr[n]}`)
                        match = false;
                        break;
                    }
                }
                if (match) {
                    if (str.substring(i,j + 1).length > pal.length) {
                        console.log(`old pal: ${pal}`);
                        pal = str.substring(i,j + 1);
                        console.log(`new pal: ${pal}`);
                    }
                }
            }
        }
    }
    return pal;
}

console.log(longestPal("what up, daddy-o?"));
console.log(longestPal("uh... not much"));
console.log(longestPal("Yikes! my favorite racecar erupted!"));
console.log(longestPal("Yikes! my favorite racecar erupted!"));


