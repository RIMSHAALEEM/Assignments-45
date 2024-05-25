/*
Question:
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
 invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you 
pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.  */

 
let guest : string[] = ['Ayesha','Sana','Ruksana'];

// for (let i=0;  i<guest.length;  i++ ){

//     console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

// }

let absent_Guest: string = 'Ruksana';

let new_Guest : string = 'Gulfishan';

guest[2] = new_Guest;

// for (let i=0;  i<guest.length;  i++ ){

//     console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

// }

console.log(`Miss ${absent_Guest} is not coming to the party\n. `);

console.log('Good news! we have got a big table so we are inviting more guests');


//3 guests are added to the array
guest.unshift('Tuba');

guest.splice(2, 0, 'Maryam');

guest.push('Saboor');


//in this code array of 6 guests is printed

for (let i=0;  i<guest.length;  i++ ){

    console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

}

 //sorry message
console.log('\nSorry we can not arrange a big table only two guests would be invited');


// guest are removed in this code
while(guest.length>2){

    let remove_guest = guest.pop();

    console.log(`Sorry Miss ${remove_guest},you are not invited for the dinner.`);
}

// two remaining invited guests

for (let i=0;  i<guest.length;  i++ ){

    console.log('Dear Miss '+ guest[i] + ',You are still invited to the party Thankyou\n');


}

// all the guests have been removed from array
guest.splice(0, 2);

console.log(guest);