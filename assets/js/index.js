
$(document).ready(function() {
	

$('.menu-inner > a').click(function(){
	$('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top-60
    }, 1000);
	return false;
});
//cho tat ca noi dung thu lai
$('.ndtime1').slideDown();
//click vào h3 tha noi dung ra
$('.time1 > h3').click(function(event) {

	//$('.ndtime1').slideUp();
	$(this).next('.ndtime1').slideToggle();
	$(this).toggleClass('doimau')
});

});