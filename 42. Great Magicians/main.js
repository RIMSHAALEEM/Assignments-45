"use strict";
/* Question:
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
  to see that the list has actually been modified.
*/
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
