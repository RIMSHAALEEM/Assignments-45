/*
Question:
They think of something you could store in a TypeScript Object. Write a program 
that creates Objects containing these items.*/

//datatype of person

interface person{
    name:string,
    age:number,
    nationality:string,

}



//person object
let person:person = {
    name: 'Talha',
    age: 20,
    nationality:'pakistani',


}


//datatype of city

interface city{
    capital:string,
    population:number,
    speciality:string,

}



//city object
let city:city = {
    capital: 'karachi',
    population: 20000,
    speciality:'food',


}

//print statements for both object
console.log(person);
console.log(city);