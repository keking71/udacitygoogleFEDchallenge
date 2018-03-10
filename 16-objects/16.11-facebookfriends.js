/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Katie",
  friends: 320,
  messages: ["Petting my cat!","Going to work...","Enjoying a sandwich!!!"],
  postMessage: function(message){
      return facebookProfile.messages.push(message); //add message to the end of the array
  },
  deleteMessage: function(index){
      return facebookProfile.messages.splice(index,1); //look in array at index given and delete one message
  },
  addFriend: function(){
      return facebookProfile.friends++; //increment friends count
  },
  removeFriend: function(){
      return facebookProfile.friends--; //decrement friends count
  }
};
