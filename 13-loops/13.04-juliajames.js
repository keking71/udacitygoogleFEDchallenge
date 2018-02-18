/*
 * Programming Quiz: JuliaJames (4-1)
 */

 var x = 1;

 while(x < 21){ //while x is under 21
   if(x % 3 === 0 && x % 5 === 0){ //if x is divisible by 3 and 5
     console.log("JuliaJames");
   } else if(x % 5 === 0){ //if x is divisible by 5
     console.log("James");
   } else if(x % 3 === 0){ //if x is divisible by 3
     console.log("Julia");
   } else { //if x isn't divisible by 3 or 5
     console.log(x);
   }
   x++; //increment x
 }
