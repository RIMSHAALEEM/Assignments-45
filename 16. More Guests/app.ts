/*
Question:
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
 
• Start with your program from Exercise 15. Add a print statement to the end 
of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one 
new guest to the end of your list. • Print a new set of invitation messages, 
one for each person in your list.  */


let guest : string[] = ['Ayesha','Sana','Ruksana'];

// for (let i=0;  i<guest.length;  i++ ){

//     console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

// }

let absent_Guest: string = 'Ruksana';

let new_Guest : string = 'Gulfishan';

guest[2] = new_Guest;

for (let i=0;  i<guest.length;  i++ ){

    console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

}

console.log(`Miss ${absent_Guest} is not coming to the party\n. `);

console.log('Good news! we have got a big table so we are inviting more guests');

guest.unshift('Tuba');

guest.splice(2, 0, 'Maryam');

guest.push('Saboor');

for (let i=0;  i<guest.length;  i++ ){

    console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

}