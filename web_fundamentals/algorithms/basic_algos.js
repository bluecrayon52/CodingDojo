// 0, 1, 2, 3, 4
for(var i=0; i<5;i++){   
   console.log(i);
}

// prints 1, 3, 5
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}

// prints 3, 7
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

// prints 5, 8 
function addUs(num1, num2){
   return num1+num2;
}
console.log(addUs(2,3))
console.log(addUs(3,5))

// prints 2, 5, 3, 8
function addUs2(num1, num2){
   console.log(num1);   
   return num1+num2;
}
console.log(addUs2(2,3))
console.log(addUs2(3,5))

//prints 15, 10, 10
a = 15;
console.log(a);
function logMe(a){
   console.log(a);   
   return a;
}
b = logMe(10);
console.log(b);

// prints 15, 10, 20
a = 15;
console.log(a);
function logMe2(a){
   console.log(a);   
   return a*2;
}
b = logMe2(10);
console.log(b);