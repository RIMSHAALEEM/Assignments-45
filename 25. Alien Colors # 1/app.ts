/* Question :
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
 and assign it a value of 'green', 'yellow', or 'red'.

• condition 1:  Write an if statement to test whether the alien’s color is green.
 If it is, print a message that the player just earned 5 points.

• condition 2: Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.) */


//condition 1
let alien_color : string = 'green'

if (alien_color === 'green'){
    console.log("Congratulation! You earned 5 points");
    
}

//condition 2

alien_color = 'red'

if (alien_color === 'green'){
    console.log("Congratulation! You earned 5 points");
    
}
