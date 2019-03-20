// object methods 
// version 1
var cat = {
    lives: 9,
    jumps(){
      this.lives--;
    }
  }
// version 2
var dog = {
    lives: 1,
    jumps: function(){
        this.lives--;
    }
}

// cat.jumps();
// console.log(cat.lives);
// dog.jumps();
// console.log(dog.lives);

// CHALLENGES!
// Build a function that prints numbers from 1 to 10
// Build a function that prints numbers from 10 to 1
const count = (x, y) => {
    if (x <= y) {
        for(;x <= y; x++) {
            console.log(x);
        }
    } else {
        for(; x>= y; x--) {
            console.log(x);
        }
    }
}

// count(1, 10);
// count(10, 1);
// count(-5, 5);
// count(5, -5);

// Build a function that prints whatever you want.
// Build a function that takes in a string and prints the string
const printMe = (req) => {
    console.log(req);
}

// Build a function that takes in a number and doubles it. Return the doubled number.
const doubleMe = (num) => {
    return num*2;
}

// console.log(doubleMe(5));