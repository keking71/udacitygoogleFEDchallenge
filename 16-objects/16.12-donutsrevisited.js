/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(val,index,array){ //for each value in the array, pull value(s), index, and the array
  var type = donuts[index].type; //assign the type of the value at that index to a variable
  var cost = donuts[index].cost; //assign the cost of the value at that index to a variable
  console.log(type + " donuts cost $" + cost + " each");
});
