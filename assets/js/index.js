
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
	TweenMax.from($(".frames-avatar"),3,{x:-80,opacity:0});
	TweenMax.from($(".contentabm"),3,{x:+80,opacity:0});
	TweenMax.from($(".myhobbie-1"),3,{y:+100,opacity:0});
	TweenMax.from($(".myhobbie"),5,{x:+800,opacity:0});
/*	hieuung = new TimelineMax();
	hieuung.from($(".frames-avatar"),3,{x:-80,opacity:0})
			.from($(".contentabm"),3,{x:+80,opacity:0})
			.from($(".myhobbie-1"),3,{y:+100,opacity:0})
			.from($(".myhobbie"),5,{x:+800,opacity:0});*/
});