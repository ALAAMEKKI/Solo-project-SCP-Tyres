//console.log('test')
$(document).ready(function(){
//test
//$('body').append('<div><p>hi</p></div>')
////////////////////////////////////////////////////////////////////////////////////////////////
//slides:
$('#img2').hide()
$('#img3').hide()
$('.contact-body').hide()


//Slides:
var counter = 1;
var images =['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg']
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    $('#img1').attr('src',images[counter-1])
    $('#img1').css('height', "572.5px")

    counter ++
    if(counter > 5){
        counter = 1;
    }
},3000)

//Navigators:
$('#home').click(function(){
    $('.contact-body').hide()
    $('.slider').show()
})

$('#contact').click(function(){
    $('.slider').hide()
    $('.contact-body').show()
})










})