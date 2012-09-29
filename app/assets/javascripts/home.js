
jQuery(document).ready(function() {
    // initialize carousel

  $("#sig-container a")
  .click(function(){
    var index = $("#sig-container a").index(this);
    $("#sig").carousel(index);
  });
  $("#dreambid-container a")
  .click(function(){
    var index = $("#dreambid-container a").index(this);
    $("#dreambid").carousel(index);
  });
  $("#abyss-container a")
  .click(function(){
    var index = $("#abyss-container a").index(this);
    $("#abyss").carousel(index);
  });
  $("#lvlup-container a")
  .click(function(){
    var index = $("#lvlup-container a").index(this);
    $("#lvlup").carousel(index);
  });
  $("#ocw-container a")
  .click(function(){
    var index = $("#ocw-container a").index(this);
    $("#ocw").carousel(index);
  });

  $("[rel=tooltip]").tooltip();

  $(window).resize(function() {
    resize();
  });
  resize();

  $('a.scroll-to').click(function() {
    var elementClicked = $(this).attr("href");
    var destination = $(elementClicked).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 500 );
    return false;
  });

  function resize(){
    var w = $("#navigation a").width();
    $("#navigation a").height(w);
  }
});
