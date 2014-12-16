$(document).ready(init);



function init() {

	//Our code goes here

	//Let's draw a path
	$.fn.scrollPath("getPath")

		//Home (starting) Page
		.moveTo(450, 200, {name:"home"})

		//Move to Israel About
		.lineTo(450, 800)
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
		
	$("#content-wrapper").scrollPath({drawPath: true, wrapAround: true});

	$(".settings .show-path-btn").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	});


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
}
