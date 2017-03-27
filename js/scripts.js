$(document).ready(function() {
  var flavors = ["chocolate", "vanilla", "strawberry", "mango", "cookies&cream"];

  flavors.forEach(function(flavor) {
    $("ul").append("<li>" + flavor + "</li>");
  });

});
