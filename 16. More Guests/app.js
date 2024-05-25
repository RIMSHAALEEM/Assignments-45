"use strict";
let guest = ['Ayesha', 'Sana', 'Ruksana'];
// for (let i=0;  i<guest.length;  i++ ){
//     console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');
// }
let absent_Guest = 'Ruksana';
let new_Guest = 'Gulfishan';
guest[2] = new_Guest;
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Miss ' + guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');
}
console.log(`Miss ${absent_Guest} is not coming to the party\n. `);
console.log('Good news! we have got a big table so we are inviting more guests');
guest.unshift('Tuba');
guest.splice(2, 0, 'Maryam');
guest.push('Saboor');
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Miss ' + guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');
}
