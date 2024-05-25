/* Question:
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
should be printed on the shirt. The function should print a sentence summarizing the size of the 
shirt and the message printed on it. Call the function.
*/

function make_shirt(size:string , text:string){
    console.log(`Creating a ${size} shirt with a message: ${text}`);

}

make_shirt('large' , 'This is my Merchandise');
make_shirt('mediun' ,  'This is my Merchandise');
make_shirt('small' , 'This is my Merchandise');

