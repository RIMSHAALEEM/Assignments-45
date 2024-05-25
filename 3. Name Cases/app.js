/* 
Question:
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/



//lower case
var personName = "Rimsha ";
console.log("Lower Case:", personName.toLowerCase());
//upper case
console.log("UpperCase:", personName.toLocaleUpperCase());
//title case
console.log("Title Case:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
