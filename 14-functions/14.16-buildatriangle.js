/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) { //for as long as the count is less than or equal to the length given
        line += "* "; //append an asterisk
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width){
  var line = "";
  for (var i = 1; i <= width; i++){ //for as long as the count is less than or equal to the width given
    line += makeLine(i); //build a line
  }
  return line;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
