
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
});
