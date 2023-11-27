$(document).ready(function() {
    $('body').toggle();
    $('body').fadeIn(3000);
});

$(document).ready(function(){
    var img = $("img");
    $("#start").click(function(){
      img.animate({left:'300px'},777);
      img.animate({left:'0px'},777);
      img.animate({padding:'0px 25%'},{duration: 777, complete:function(){
        img.after('<p id="img-text">Image Animation using jQuery</p>');
      }});
    });
  });

$(document).ready(function(){
    $("#list").click(function(){
        $(this).next().next().slideUp();
    });
});