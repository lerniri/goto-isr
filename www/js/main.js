$(document).ready(init);

	var pageNav = {
		//properties 
		//methods

		menuclick: function() {
			alert('hi');

		},


		sign_dir: function() {
			//Redraw signs direction according to post position
			var signDir = [],
				$page_item = $('.page-item'),
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


				//if sign post pos > page pos then sign dir = left
				//if sign post pos < page pos then sign dir = right 

				signDir[pid] = dir;
			}

			function rotateSign(dir,sign) {
				//Create class .rotated  
					// sign and text rotated 180 verticaly
					if (dir != sign.attr("data-dir")) {
						sign.toggleClass('rotate');
						sign.attr("data-dir",dir);
					};
 

			}

				
			//get current position of a sign post
			
			



		},

		navigate: function(e) {

			var $site_nav 	  = $("#site_nav"),
        		rightPadding  = 25,
        		target 		  = $(this).attr("href");

			e.preventDefault();
			$('html,body').stop();
			$('html, body').scrollTop($(".page-item").css("margin-top"));
			$('html, body').animate({
					scrollLeft: $(target).offset().left
			}, 2500, "easeInOutSine");
			$site_nav.css("right", -1*$(target).offset().left + rightPadding + "px");

			pageNav.sign_dir();
			
		},

		init: function() {

			console.log("Initiating page navigation.... ");


			$('#site_nav').find('a').bind('click',pageNav.navigate);


		    console.log("Finished page navigation initialisation...");
		}

}


function init() {

	//Variables
	var $sidebar      = $(".sidebar_nav"), 
        $window    	  = $(window),
        offset     	  = $sidebar.offset(),
        topPadding 	  = 180;

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

