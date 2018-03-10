/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) { //if the umbrella is open
            return "The umbrella is already opened!";
        } else { //if the umbrella is not open
            umbrella.isOpen = true; //set value to Open
            return "Julia opens the umbrella!";
        }
    },
// your code goes here
    close: function() {
        if (umbrella.isOpen === true) { //if the umbrella is open
            umbrella.isOpen = false; //set value to Closed
            return "Julia closes the umbrella!";
        } else { //if the umbrella is closed
            return "The umbrella is already closed!";
        }
    }
};
