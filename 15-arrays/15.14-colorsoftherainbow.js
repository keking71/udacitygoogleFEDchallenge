/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2,1,"Yellow","Green"); //start at Blackberry, delete it, add Yellow and Green

rainbow.push("Purple"); //Add Purple to the end

console.log(rainbow);
