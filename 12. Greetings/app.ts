/*
Question:
Greetings: Start with the array you used in Exercise 11, but instead of just 
printing each person’s name, print a message to them. The text of each message 
should be the same, but each message should be personalized with the person’s name.
*/

let names: string[]= ['Taha', 'Asad', 'Saba','Careem','Uber','MongoDB'];

//const message : string = "Welcome to Typescript Class: ";

for (let i=0; i<names.length; i++){

console.log("Welcome to Typescript Class: "  + names[i]);

}