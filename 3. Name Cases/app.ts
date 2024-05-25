//lower case
let personName :string="Rimsha ";
console.log("Lower Case:",personName.toLowerCase());

//upper case
console.log("UpperCase:",personName.toLocaleUpperCase());

//title case
console.log("Title Case:",personName.replace(/\bw/g,c=>c.toUpperCase() ));


