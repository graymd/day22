$(document).ready(function(){
  $('ul.medication_list > li').hide();
  $('li.section_1').show();

$("ul.link_list > li > a").click(function() {
  $("ul.medication_list > li").hide()
  var medication_list = $(this).attr("med_num")
  $("li.section_" + medication_list).show()
})  


})
