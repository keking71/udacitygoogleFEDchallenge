/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === false){ //If you don't want to check your balance
    console.log("Thank you. Have a nice day!");
} else if(isActive === true && balance > 0){ //If account is active and balance is greater than 0
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if(isActive === false){ //If your account is no longer active
    console.log("Your account is no longer active.");
} else if(balance === 0){ //If your account is empty
    console.log("Your account is empty.");
} else {
    console.log("Your balance is negative. Please contact bank."); //If your account is negative
}
