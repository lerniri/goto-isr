$(document).ready(init);

	var pageNav = {
		//properties 
		//methods

		menuclick: function() {
			alert('hi');

		},

		init: function() {

			console.log("Initiating page navigation.... ");

		    console.log("Finished page navigation initialisation...");
		}

}


function init() {
	//Variables
	var $sidebar      = $(".sidebar_nav"), 
        $window    	  = $(window),
        offset     = $sidebar.offset(),
        topPadding = 180,
        $site_nav 	  = $("#site_nav");
        

	//SITE PAGES NAVIGATION
	$("#site_nav").find("a").each(function() {
		var target = $(this).attr("href");
		$(this).click(function(e) {
	 		e.preventDefault();
			$('html,body').stop();
			$('html, body').scrollTop($(".page-item").css("margin-top"));
			$('html, body').animate({
				scrollLeft: $(target).offset().left
			}, 2500, "easeInOutSine");

			$('#site_nav').css("right", -1*$(target).offset().left + "px");
	 	});

	})

	//Temporary solution for debugging purposes 
	// $(".nav").find("a").each(function() {
	// 	var target = $(this).attr("href");
	// 	$(this).click(function(e) {
	//  		e.preventDefault();
	// 		$('html,body').stop();
	// 		$('html, body').scrollTop($(".page-item").css("margin-top"));
	// 		$('html, body').animate({
	// 			scrollLeft: $(target).offset().left
	// 		}, 2500, "easeInOutSine");
	//  	});
	// })
	

	//PAGE SCROLLING
    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });


        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });

           
        }
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


	$('#signpost_obj').load(pageNav.init());

}

