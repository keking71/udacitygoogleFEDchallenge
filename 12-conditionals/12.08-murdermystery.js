/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if(room === "dining room"){ //if the accusation contains the dining room
  if(suspect === "Mr. Parkes"){ //if the accusation contains Mr. Parkes
    weapon = "knife"; //the weapon was a knife
    solved = true;
  }
} else if(room === "gallery"){ //if the accusation contains the gallery
  if(suspect === "Ms. Van Cleve"){ //if the accusation contains Ms. Van Cleve
    weapon = "trophy"; //the weapon was a trophy
    solved = true;
  }
} else if(room === "billiards room"){ //if the accusation contains the billiards room
  if(suspect === "Mrs. Sparr"){ //if the accusation contains Mrs. Sparr
    weapon = "pool stick"; //the weapon was a pool stick
    solved = true;
  }
} else{ //if the accusation contains the ballroom
  if(suspect === "Mr. Kalehoff"){ //if the accusation contains Mr. Kalehoff
    weapon = "poison"; //the weapon was poison
    solved = true;
  }
}

if(solved === true){ //if the murder was solved
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
