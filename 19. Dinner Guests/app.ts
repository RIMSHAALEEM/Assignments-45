/*
Question:
 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner. */

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

// console.log(`Miss ${absent_Guest} is not coming to the party\n. `);

// console.log('Good news! we have got a big table so we are inviting more guests');


//3 guests are added to the array
guest.unshift('Tuba');

guest.splice(2, 0, 'Maryam');

guest.push('Saboor');


//in this code array of 6 guests is printed

// for (let i=0;  i<guest.length;  i++ ){

//     console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

// }

 //sorry message
//console.log('\nSorry we can not arrange a big table only two guests would be invited');


// guest are removed in this code
while(guest.length>2){

    let remove_guest = guest.pop();

    //console.log(`Sorry Miss ${remove_guest},you are not invited for the dinner.`);
}

// two remaining invited guests

// for (let i=0;  i<guest.length;  i++ ){

//     console.log('Dear Miss '+ guest[i] + ',You are still invited to the party Thankyou\n');


// }

// all the guests have been removed from the array
guest.splice(0, 2);

console.log(guest);

// exercise 19
//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guests are: ${guest.length}`);
