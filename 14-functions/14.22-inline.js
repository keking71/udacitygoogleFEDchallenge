/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) { //define emotions function with two parameters
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy",function (x){ //specify string,anonymous function
  var print = ""; //define print var
  for (var i = 1; i <= x; i++){ //for the # of laughs
    print = print + "ha"; //add on 'ha'
  }
  return print + "!"; //return full statement
});
