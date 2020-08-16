
$('.personal').html('<i class="fas fa-user-clock"></i> <b>PERSONAL</b>').css('background-color','rgb(242 169 195)');
$('.school').html('<i class="fas fa-school"></i> <b>SCHOOL</b>').css('background-color','#87d8fd');
$('.collage').html('<i class="fas fa-university"></i> <b>COLLAGE</b>').css('background-color','#ffadbe');
$('.home').html('<i class="fas fa-home"></i> <b>HOME</b>').css('background-color','#c5a4ff');
$('.office').html('<i class="fas fa-briefcase"></i> <b>OFFICE</b>').css('background-color','#e3ffa7');
$("#allcheck").click(function(){
    $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
Array.from($("input[type=checkbox]")).forEach((e)=>{
console.log($("input[type=checkbox]").val())
});
});