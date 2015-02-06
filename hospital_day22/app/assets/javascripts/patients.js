$(document).ready(function(){

  //enforces a change on first or last name prior to allowing submittal by disabling submit button
  $('.submit').prop('disabled', true);
  $('.name_field').change(function(){
    var first_name = $(".name_field:first").val();
    var last_name = $(".name_field:last").val();
    if (first_name != "" || last_name != "") {
      $('.submit').prop('disabled', false);
    }
    if (first_name == "" || last_name == "") {
      $('.submit').prop('disabled', true);
    }
  })

  //sets fadeout on alerts and notice
  $(".alert").fadeOut(5000);
  $(".notice").fadeOut(5000);


  
  //sets whether or not information required
  var first_name = $(".name_field:first").val();
  var last_name = $(".name_field:last").val(); 
  if (first_name != "") {
    $('.error_first_name').hide();
  }
  if (last_name != "") {
    $('.error_last_name').hide();
  }

  //checks whether or not information required to be entered each keyup inside first and last name fields
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



  // Pagination:
  // Hide the whole patient index section
  $('ul.patient_list > li').hide();
  // Show the first li in the patient index section
  $('li.section_1').show();

  //sets click event on links on index page to show applicable page
$("ul.link_list > li > a").click(function() {
  $("ul.patient_list > li").hide();
  var patient_list = $(this).attr("patient_num");
  $("li.section_" + patient_list).show();
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
