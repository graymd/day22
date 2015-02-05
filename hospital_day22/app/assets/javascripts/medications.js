$(document).ready(function(){
  $('ul.medication_list > li').hide();
  $('li.section_1').show();
  $('.link_1').click(function(){
    $('ul.medication_list > li').hide();
    $('li.section_1').show();
  })
  $('.link_2').click(function(){
    $('ul.medication_list > li').hide();
    $('li.section_2').show();
  })
  $('.link_3').click(function(){
    $('ul.medication_list > li').hide();
    $('li.section_3').show();
  })
  $('.link_4').click(function(){
    $('ul.medication_list > li').hide();
    $('li.section_4').show();
  })
})