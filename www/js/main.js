$(document).ready(init);



function init() {

	//Our code goes here

	//Let's draw a path
	$.fn.scrollPath("getPath")

		//Home (starting) Page
		.moveTo(450, 200)

		//Move to Israel About
		.lineTo(450, 800)
		.lineTo(2200,800)

		//Move to Israel Immigration
		.arc(2200, 1050, 250, -Math.PI/2, Math.PI/2, false)
		.lineTo(1800,1300)
		.arc(1800, 1550, 250, -Math.PI/2, Math.PI/2, true)
		
		//Move to Blog
		.lineTo(4000, 1800)
		.lineTo(4000, 3000)
		.lineTo(2400, 3000)

		//Move to Forum 
		.lineTo(1000, 3000)
		.arc(1000, 2750, 250, Math.PI/2, -Math.PI/2, false)
		.lineTo(1000, 2000)

		//Move to News 
		.lineTo(1000, 1500)
		.lineTo(0, 1500)

		//Move to Home
		.lineTo(0,200)
		.lineTo(457,200);		
		
	$("#content-wrapper").scrollPath({drawPath: true, wrapAround: true});

}
