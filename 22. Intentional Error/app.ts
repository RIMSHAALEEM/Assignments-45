/*
Question:
Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/

//creating an array
let newArray : string[] = ['Robert','Tom','Cruise'];

// accessing array by its index but it willthrow an error because index [4] array is nor defined
console.log(newArray[4]);


//printing the correct array
console.log(newArray);