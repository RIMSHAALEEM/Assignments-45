"use strict";
/* Question :
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color
 alien.. */
//condition 1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulation! You earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulatons! You earned 10 points");
}
else {
    console.log("Congratulations! You earned 15 points");
}
//condition 2
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulation! You earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulatons! You earned 10 points");
}
else {
    console.log("Congratulations! You earned 15 points");
}
//condition 3
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulation! You earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulatons! You earned 10 points");
}
else {
    console.log("Congratulations! You earned 15 points");
}
