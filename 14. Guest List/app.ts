/*
Question:
Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like
 to invite to dinner. Then use your list to print a message to each person, 
  them to dinner. */

let guest : string[] = ['Ayesha','Sana','Ruksana'];

for (let i=0;  i<guest.length;  i++ ){

    console.log('Dear Miss '+ guest[i] + ',\nIt is our pleasure to invite you in our party.\nThankyou!\n');

}