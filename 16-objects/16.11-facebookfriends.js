/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Katie",
  friends: 320,
  messages: ["Petting my cat!","Going to work...","Enjoying a sandwich!!!"],
  postMessage: function(message){
      return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index){
      return facebookProfile.messages.splice(index,1);
  },
  addFriend: function(){
      return facebookProfile.friends++;
  },
  removeFriend: function(){
      return facebookProfile.friends--;
  }
};
