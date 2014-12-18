$(document).ready(init);



function init() {

	//Scrolling


	$(".nav").find("a").each(function() {
		var target = $(this).attr("href");
		$(this).click(function(e) {
	 		e.preventDefault();
			
			$('html, body').scrollTop($(".page-item").css("margin-top"));
			$('html, body').animate({
				scrollLeft: $(target).offset().left
			}, 2500, "easeInOutSine")	;

	 	});
	})
	

	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});

}
