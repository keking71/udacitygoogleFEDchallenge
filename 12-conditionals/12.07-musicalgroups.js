/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

// your code goes here
if(musicians <= 0){ //if there are 0 or fewer musicians
  console.log('not a group');
} else if(musicians === 1){ //if there is one musician
  console.log('solo');
} else if(musicians === 2){ //if there are two musicians
  console.log('duet');
} else if(musicians === 3){ //if there are 3 musicians
  console.log('trio');
} else if(musicians === 4){ //if there are 4 musicians
  console.log('quartet');
} else { //any value larger than 4 or other
  console.log('this is a large group');
}
