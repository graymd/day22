$(document).ready(function(){
  $('.submit').prop('disabled', true);

  $('.name_field').mouseleave(function(){
    var first_name = $(".name_field:first").val();
    var last_name = $(".name_field:last").val();
    if (first_name != "" || last_name != "") {
      $('.submit').prop('disabled', false);
    }
    if (first_name == "" || last_name == "") {
      $('.submit').prop('disabled', true);
    }
  })

  $(".flash").fadeOut(10000);

  $('.name_field').keyup(function(){
    var first_name = $(".name_field:first").val();
    var last_name = $(".name_field:last").val();
    if (first_name != "") {
      $('.error_first_name').hide();
    }
    else {
      $('.error_first_name').show();
    }
    if (last_name != "") {
      $('.error_last_name').hide();
    }
    else {
      $('.error_last_name').show();
    }
  })
});


// $(document).ready(function(){
//   $('#create').click(function(){
//     validateForm();
//   });
//   $('.error-clinic').delay(1000).fadeOut();

// function validateForm(){

//   var name = $('#nameInput').val();

//   if (name == ""){
//     $('#nameInput').after('Please enter a name')
//   }
// }

// });


// $('.name_field').on('input', function(){
//     var input = $(this);
//     var is_name=input.val();
//     if(is_name){input.removeClass("invalid").addClass("valid");}
//     else{input.removeClass("valid").addClass("invalid");}
//     })

// <!--Name can't be blank-->
// $('#contact_name').on('input', function() {
//     var input=$(this);
//     var is_name=input.val();
//     if(is_name){input.removeClass("invalid").addClass("valid");}
//     else{input.removeClass("valid").addClass("invalid");}
// });
