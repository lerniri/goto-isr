$(document).ready(init);



function init() {

	//==================================
	//			SCROLLING PATH
	//==================================
	$.fn.scrollPath("getPath")

		
		//x of the page point should be always vw / 2 - sidebar width (20vw)


		//Home (starting) Page
		.moveTo(576, 200, {name:"home"})
		.lineTo(576, 800)
		
		//Move to Israel About
		.lineTo(1100, 800, {name: "isr-about"})
		.lineTo(2200,800)

		//Move to Israel Immigration
		.arc(2200, 1050, 250, -Math.PI/2, Math.PI/2, false)
		.lineTo(1800,1300)
		.arc(1800, 1550, 250, -Math.PI/2, Math.PI/2, true)
		.lineTo(2400,1800, {name: "isr-imm"} )
		

		//Move to Blog
		.lineTo(4000, 1800)
		.lineTo(4000, 3000)
		.lineTo(3200, 3000, {name:"blogs"})
		.lineTo(2400, 3000)

		//Move to Forum 
		.lineTo(1000, 3000)
		.arc(1000, 2750, 250, Math.PI/2, -Math.PI/2, false)
		.lineTo(1000,2150, {name:"forum"})
		.lineTo(1000, 2000)

		//Move to about Us 
		.lineTo(1000, 1500)
		.lineTo(0, 1500, {name:"aboutUs"})

		//Move to Home
		.lineTo(0,200)
		.lineTo(457,200);		
		
	$("#content-wrapper").scrollPath({drawPath: true, wrapAround: true, scrollBar:false});

	$(".settings .show-path-btn").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	});


	// Disable page scrolling
	

	// Add scrollTo on click on the navigation anchors
	$(".nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});


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
