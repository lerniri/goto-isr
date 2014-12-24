$(document).ready(init);

var pageNav = {
	//properties 
	//methods

	sign_dir: function() {
		//Redraw signs direction according to post position
		var	$page_item = $('.page-item'),
			signOffset = $('#site_nav').offset().left;

		for (i=0;i<$page_item.length -1 ; i++) {
			var dir = 1;
			var pid = $page_item[i].id;
			var poffset = $page_item[i].offsetLeft;
			
			//check sign post position with pages offset position
			if (signOffset > poffset) {
				
				rotateSign(-1,$("#site_nav li[name="+pid+"]"));
				 }
			else {
				rotateSign(1,$("#site_nav li[name="+pid+"]"));
			};			
		}

		function rotateSign(dir,sign) {
			//Create class .rotated  
				// sign and text rotated 180 verticaly
				if (dir != sign.attr("data-dir")) {
					sign.toggleClass('rotate');
					sign.attr("data-dir",dir);
				};


		}
	},

	navigate: function(e) {

		var $site_nav 	  = $("#site_nav"),
    		$page_item    = $(".page-item"),
    		$page_bg	  = $(".page-background"),
    		rightPadding  = 25,

    		target 		  = $(this).attr("href");

		e.preventDefault();
		$page_bg.removeClass('blur');
		$page_item.fadeOut(500);
		$site_nav.fadeOut(5);
		$('html,body').stop();

		$('html, body').scrollTop($(".page-item").css("margin-top"));

		$('.man').addClass('walk');
		$('html, body').animate({
				scrollLeft: $(target).offset().left
		}, 2500, "easeInOutSine", function(){

			
			pageNav.sign_dir();
			$page_bg.addClass('blur');
			$site_nav.fadeIn(200);
			$page_item.fadeIn(500);
			$('.man').removeClass('walk');

		});
		
		

	},

	init: function() {
		console.log("Initiating page navigation.... ");
		
		
		$('#site_nav').find('a').bind('click',pageNav.navigate);


	    console.log("Finished page navigation initialisation...");
	}

} // pageNav obj End


var animation = {

	box_rotation: function() {
		$('.animated_box').addClass('rotation');

	}
} // animation obj end



function init() {

	//Variables
	var $sidebar      = $(".sidebar_nav"), 
        $window    	  = $(window),
        offset     	  = $sidebar.offset(),
        topPadding 	  = 180,
        $character    = $('.character');

	//PAGE SCROLLING
    $window.scroll(function() {

    	//confirm that we have horizontal scrolling; 
    	if (window.pageYOffset === 0 && window.pageXOffset != 0) {
 
    		//Put animation here

    		// var scrollX  = window.pageXOffset;
    		// var cLeft 	 = $('.character').css("left");
    		// $('.character').css("left", scrollX/7 + "px");
    	}
    	
    	

        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });


        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });           
        }

        //animation 

    });

    //PAGES MENU

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

