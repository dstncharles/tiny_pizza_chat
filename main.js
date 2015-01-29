(function() {
  'use strict';
  var pizzaUrl = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";


// $.ajax({
//   url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
//   type: "POST",
//   data: {
//     message: "Hi!",
//     username: "jacobsmith",
//     createdAt: "Thu Jan 29 2015 13:34:05 GMT-0500 (EST)"
//   }
// })


  $(document).ready(function() {



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

  });











})();
