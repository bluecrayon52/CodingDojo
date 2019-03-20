// print numbers 1 to 10 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// print numbers 10 to 1 
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// print even numbers 2 to 254
for (let i = 2; i <= 254; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// print odd numbers 1 to 255 
for(let i = 1; i <= 255; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

for (let i = 1; i <=21; i++) {
    let res = ""; // res = false 

    if (i % 3 == 0) {
        res+="fizz";  // res = true 
    }
    if (i % 5 == 0) {
        res+="buzz"; // res = true
    }
    if (res) {
        console.log(res); 
    } else {
        console.log(i);
    }
}
