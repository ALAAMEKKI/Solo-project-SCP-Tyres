//console.log('test')
$(document).ready(function(){
//test
//$('body').append('<div><p>hi</p></div>')
////////////////////////////////////////////////////////////////////////////////////////////////
//slides:
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++
    if(counter > 3){
        counter = 1;
    }
},5000)









})