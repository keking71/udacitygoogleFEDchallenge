/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
 function laugh(num){
   var msg = "";
   for (var i = 1; i <= num; i++){ //for as long as the count is less than or equal to the value given
     msg = msg + "ha"; //append a laugh
   }
   return msg + "!";
 }

 console.log(laugh(3));
