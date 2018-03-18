
/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() { //when the input is changed
    var val;
    val = $("#input").val(); //get the changed input
    var h1;
    h1 = $(".articles").children("h1"); //get h1
    h1.text(val); //swap out the values
});
