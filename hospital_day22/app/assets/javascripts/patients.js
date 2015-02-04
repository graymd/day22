$(document).ready(function(){
  $('.submit').hide();
  $('.name_field').mouseleave(function(){
    var name_test = $(".name_field").val();
    if (name_test != "") {
      $('.submit').show();
    }
    if (name_test == "") {
      $('.submit').hide();
    }
  })
});