(function() {
  'use strict';

  var pizzaUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
  var userLogin;




    var chatTemplate = _.template($('[data-template-name=chat]').text());
    var $chatLogUl = $(".tinyPizzaChatLog");
    $.ajax(pizzaUrl).done(function(chatArray) {
      _.each(chatArray, function(chatObject) {
        _.defaults(chatObject, {
          message: "",
          username: "",
          createdAt:""
        });
        $chatLogUl.append(chatTemplate(chatObject));
      });
    });


  //-----------------



  $('form').on('submit', function(event) {
    event.preventDefault();
    var messageOutPut = $(".message").val();
    console.log(userLogin);
    $.ajax({
      url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
      type: "POST",
      data: {
        message: messageOutPut,
        username: userLogin,
        // createdAt: "test"
      }
    });
});



////refresh page

$('form').on('submit', function(event){
  userLogin = $(".login").val();
  console.log(userLogin);
$( ".login_page"  ).css( "display" , "none" );
$( ".chatroom"  ).css( "display" , "block" );
setInterval(function(){
updateChat();
}, 5000);
 });



function updateChat(){
  $.ajax(pizzaUrl).done(function(chatArray) {
    _.each(chatArray, function (chatObject) {
      _.defaults(chatObject, {
        message:"",
        username:"",
        createdAt:""
      });
    });
    console.log(chatArray);
    $(".tinyPizzaChatLog").empty();
    _.each(chatArray, function(chatObject) {
      _.defaults(chatObject, {
        message: "",
        username: "",
        createdAt:""
      });
      $(".tinyPizzaChatLog").append(chatTemplate(chatObject));
    });
  });
}


// //toggle class//
// $( "div.login_page" ).toggleClass( "chatroom" ),
//
// if ( addOrRemove ) {
//   $( "userLogin" ).addClass(  );
// } else {
//   $( "#foo" ).removeClass( className );
// }




})();
