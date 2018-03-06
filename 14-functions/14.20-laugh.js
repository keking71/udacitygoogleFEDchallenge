/*
 * Programming Quiz: Laugh (5-4)
 */

 var laugh = function(x){ //anonymous function
   var print = ""; //define print var
   for (var i = 1; i <= x; i++){ //for the # of laughs
     print = print + "ha"; //add on 'ha'
   }
   return print + "!"; //return full statement
 };

 console.log(laugh(10)); //specify # of laughs
