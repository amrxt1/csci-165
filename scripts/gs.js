$(document).ready(function() {
    $('ol').toggle();

    $('span.bold-big').click(function(){
        $('ol').toggle();
    });
});

$("#bold").click(function(){
    $("#target").addClass("bold-text");
  });
  