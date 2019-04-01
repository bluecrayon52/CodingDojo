(() => {
// Sigma - Implement function sigma(num) that, given a number, 
// returns the sum of all positive integers up to the given number (inclusive).  
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
const sigma = (num) => {
    let sigma = 1 ;
    for(let i = 2; i <= num; sigma+=i, i++);
    return sigma;
}
// console.log(sigma(3));
// console.log(sigma(5));

// Factorial - Write a function factorial(num) that, given a number, 
// returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
const factorial = (num) => {
    let fact = 1; 
    for(let i = 2; i <= num; fact*=i, i++);
    return fact;
}
// console.log(factorial(3));
// console.log(factorial(5));

/*
Generate Coin Change
Change is inevitable (especially when breaking a twenty). 
Make generateCoinChange(cents). 
Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. 
Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
*/

/*
Second: can you simplify/shorten your code?

Example output, given (94) :

94 cents can be represented by:

quarters:3

dimes:1

nickels:1

pennies:4

Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.
*/

const generateCoinChange = (cents) => {
    let b = 0, h =0, q = 0, d = 0, n = 0, p = 0; 

    for (let i = 100; i <= cents; i+=100) {
        b++;
    }
    cents-=(q*100);

    for (let i = 50; i <= cents; i+=50) {
        h++;
    }
    cents-=(h*50);

    for (let i = 25; i <= cents; i+=25) {
        q++;
    }
    cents-=(q*25);

    for (let i = 10; i <= cents; i+=10) {
        d++;
    }
    cents-=(d*10);

    for (let i = 5; i <= cents; i+=5) {
        n++;
    }
    cents-=(n*5);

    for (let i = 1; i <= cents; i++) {
        p++;
    }
    
    return {dollars: b, half_dollars: h, quarters: q, dimes: d, nickels: n, pennies: p}; 
}

let coins = generateCoinChange(94);
console.log(coins);

})();