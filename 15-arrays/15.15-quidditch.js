/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers(x) { //check if there are enough players
  var count = x.length; //grab the length of the player array
  if (count >= 7) { //if there are at least 7 players
    return true; //we have enough players
  } else {
    return false; //otherwise, there aren't enough players
  }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
