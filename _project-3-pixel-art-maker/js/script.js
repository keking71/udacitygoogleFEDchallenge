$("input[type='number']").change(function(){ //when number inputs are changed
  $("tbody").children().remove(); //remove the table
  var width = $("#width").val(); //set width to input width
  var height = $("#height").val(); //set height to the input height
  var x = 1;
  var y = 1;
  while (y <= height) { //while y is less than or equal to input height
    $("tbody").append("<tr></tr>"); //append rows
    y++;
   };
  while (x <= width) { //while x is less than or equal to input width
    $("tr").append("<td></td>"); //append cells to the rows
    x++;
   };
});

$("#paint").change(function(){ //when the paint input is changed
  var inp = $("#paint").val(); //get the input value
  $("#paint").attr("value",inp); //update input attribute's value
  $("#colorpreview").css("background-color",inp); //change preview bg color to input
});

$("table").children().click(function(event){ //listen for click in table's children
  var color = $("#paint").attr("value"); //set color to current paint input
  var target = $(event.target); //isolate the target of the event
  target.css("background-color",color); //fill target with paint color
});


$("#clear").click(function(){ //when clear button is clicked
  $("tbody").find("td").css("background-color","white"); //set all td backgrounds to white
});
