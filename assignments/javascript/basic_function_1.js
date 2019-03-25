// 15 out of 15 correctly predicted

// prints 35
function a1(){
    return 35;
}
console.log(a1())

// prints 8 
function a2(){
    return 4;
}
console.log(a2()+a2());

// prints 6 
function a3(b){
    return b;
}
console.log(a3(2)+a3(4));

// prints 3, 9 
function a4(b){
    console.log(b);
    return b*3;
}
console.log(a4(3));

// prints 40
function a5(b){
    return b*4;
    console.log(b);
 }
 console.log(a5(10));

// prints 4
function a6(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a6(15));

// prints 10, 3, 30
function a7(b,c){
    return b*c;
}
console.log(10,3);
console.log(a7(3,10));

// prints 3, 4
function a8(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// prints 2, 5, 8, 11
function a9(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a9();

// prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
// 0
function a10(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a10(0,10);
console.log(a10(0,10));

// prints nothing (not called)
function a11(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// prints nothing (not called)
function a12(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// prints 10
var z = 10;
function a13(){
    var z = 15;
    console.log(z);
}
console.log(z);

// prints 15, 10
var z = 10;
function a14(){
    var z = 15;
    console.log(z);
}
a14();
console.log(z);

// prints 15, 15
var z = 10;
function a15(){
    var z = 15;
    console.log(z);
    return z;
}
z = a15();
console.log(z);







