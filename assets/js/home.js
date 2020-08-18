//category class added 

$('.personal').html('<i class="fas fa-user-clock"></i> <b>PERSONAL</b>').css('background-color','rgb(242 169 195)');
$('.school').html('<i class="fas fa-school"></i> <b>SCHOOL</b>').css('background-color','#87d8fd');
$('.collage').html('<i class="fas fa-university"></i> <b>COLLAGE</b>').css('background-color','#ffadbe');
$('.home').html('<i class="fas fa-home"></i> <b>HOME</b>').css('background-color','#c5a4ff');
$('.office').html('<i class="fas fa-briefcase"></i> <b>OFFICE</b>').css('background-color','#e3ffa7');

//check all check boxes 

$("#allcheck").click(function(){
    $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
});


//search bar added for category

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){
    let searchIpt = searchTxt.value.toUpperCase();
    // console.log("text",searchIpt);
    
    let noteCard=document.getElementsByClassName('tr_animate');
    Array.from(noteCard).forEach(e => {
        let cardTxt = e.getElementsByClassName("cati")[0].innerText;
        if (cardTxt.includes(searchIpt)) {
            // console.log("match find",cardTxt);
            e.style.display = "table-row";
            // e.style.flexDirection = "flex-row";
            
            
        } else {
            e.style.display = "none";
            
        }
    })
});