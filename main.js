(function() {
  'use strict';
var pizzaData = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";


$.ajax({
  url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
  type: "POST",
  data: {
    message: "Hi!",
    username: "jacobsmith",
    createdAt: "Thu Jan 29 2015 13:34:05 GMT-0500 (EST)"
  }
})


$(document).ready(function() {



var repoTemplate = _.template($('[data-template-name=repo]').text());
var $repositoryUl = $(".repositories");
$.ajax(dataUrl + "/repos").done(function(reposArray) {
  _.each(reposArray, function(repoObject) {
    $repositoryUl.append(repoTemplate(repoObject));
  });
});
});


}








})();
