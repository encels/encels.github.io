(function(){
	'use-strict';

	/* ---------------------------------------------
	 Initializing All Functions
	 --------------------------------------------- */
	initAboutImgHeight();
	initPreloaderFade();
	initShadowChange();
	initColorScheme();
	initHeroHeight();
	initAboutImgHeight();
	initBlogImageHeight();
	initSectionHightlight();
	initImageBackground();
	initSearchArea();
	initAnimateScroll();
	initNavMenu();
	initMagnificPopup();
	initPortfolio();
	initMasonry();
	initProgressBar();
	initCarousel();
	initWowAnimation();
	initContactForm();
	initGoogleMap();


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Resize
	 --------------------------------------------- */
	$(window).resize(function(){
		initRespNavMenu();
		initAboutImgHeight();
		initBlogImageHeight();
		initPortfolioResize();
	});


	/* ---------------------------------------------
	 Initializing Functions Triggered On Window Scroll
	 --------------------------------------------- */
	$(window).scroll(function(){
		initHeaderAnimation();
		initSearchAreaHide();
	});



	/* ---------------------------------------------
	 Shadow Change
	 --------------------------------------------- */
	function initShadowChange(){
		$('.shadow-change').on('mouseenter', function(){
			$(this).removeClass('z-depth-1')
			$(this).addClass('z-depth-2')
		});
		$('.shadow-change').on('mouseleave', function(){
			$(this).removeClass('z-depth-2')
			$(this).addClass('z-depth-1')
		});
	}


	/* ---------------------------------------------
	 Color Scheme Select
	 --------------------------------------------- */
	function initColorScheme(){
		$('.color-scheme-select-btn').on('click', function(){
			$('.color-scheme-select').toggleClass('color-scheme-select-visible');
		});

		$('.color-scheme-content').on('click', function(){
			var colorLink = $(this).attr('id');
			$('.color-scheme').attr('href', 'css/' + colorLink + '.css');
		});
	}


	/* ---------------------------------------------
	 Preloader Fadeout
	 --------------------------------------------- */
	function initPreloaderFade(){
		$('.preloader').fadeOut();
	}


	/* ---------------------------------------------
	 Section Highlighting
	 --------------------------------------------- */
	function initSectionHightlight(){
		$('section').each(function(){
			$(this).waypoint(function(direction){
				if(direction === 'down'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-nav');
					$(current_section_link).addClass('active-nav');
				}
			} , {offset: '130px'});
			$(this).waypoint(function(direction){
				if(direction === 'up'){
					var sec_id = $(this).attr('id');
					var current_section_link = '.' + sec_id + '-nav';
					$('.main-nav > ul > li > a').removeClass('active-nav');
					$(current_section_link).addClass('active-nav');
				}
			} , {offset: function(){return -$(this).height() + 130;}});
		});
	}


	/* ---------------------------------------------
	 Hero Height
	 --------------------------------------------- */
	function initHeroHeight(){
		$('.hero-height').height($(window).height());
	}


	/* ---------------------------------------------
	 About Image Height
	 --------------------------------------------- */
	function initAboutImgHeight(){
		$('.about-img').height($('.about-data').height());
	}


	/* ---------------------------------------------
	 Blog Image Height
	 --------------------------------------------- */
	function initBlogImageHeight(){
		$(".blog-img").height($(".blog-desc").height() + 60);
	}


	/* ---------------------------------------------
	 Image Background
	 --------------------------------------------- */
	function initImageBackground(){
		$(".image-bg").each(function(){
			if ($(this).attr("data-image-bg")){
				$(this).css({
					"background": "url(" + $(this).data("image-bg") + ")",
					'background-position': 'center top',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
			}
		});
	}


	/* ---------------------------------------------
	 Search Area
	 --------------------------------------------- */
	function initSearchArea(){
		$('.search-open').on('click', function(){
			if($('.search-area').hasClass('search-area-hidden')){
				$('.search-area').removeClass('search-area-hidden');
				$('.search-area').addClass('search-area-visible');
			}
		});

		$('html').on('click', function(){
			if($('.search-area').hasClass('search-area-visible')){
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		});

		$('.search-area, .search-open').on('click', function(e){
			e.stopPropagation();
		});
	}


	/* ---------------------------------------------
	 Search Area Hide On Scroll
	 --------------------------------------------- */
	function initSearchAreaHide(){
		if($(window).scrollTop() < 100){
			if($('.search-area').hasClass('search-area-visible')){
				$('.search-area').removeClass('search-area-visible');
				$('.search-area').addClass('search-area-hidden');
			}
		}
	}


	/* ---------------------------------------------
	 Animate Scroll
	 --------------------------------------------- */
	function initAnimateScroll(){
		$('.animatescroll-link').on('click', function(e){
			e.preventDefault();
		});
	}


	/* ---------------------------------------------
	 Navigation Menu
	 --------------------------------------------- */
	function initNavMenu(){
		$('.sub-menu').mouseenter(function(e){
			e.stopPropagation();
			if($(window).width() > 1024){
				$(this).children('.sub-menu-content').fadeIn();
			}

			$(this).mouseleave(function(){
				if($(window).width() > 1024){
					$(this).children('.sub-menu-content').fadeOut();
				}
			});
		});

		$('.sub-menu').on('click', function(e){
			e.stopPropagation();
			if($(window).width() <= 1024){
				$(this).children('.sub-menu-content').slideToggle();
			}
		});

		$('.menu-bar').on('click', function(){
			if($(window).width() <= 1024){
				$('.main-nav').slideToggle();
			}
		});
	}


	/* ---------------------------------------------
	 Responsive Navigation Menu
	 --------------------------------------------- */
	function initRespNavMenu(){
		if($(window).width() > 991 && $('.main-nav').css('display') == 'none'){
			$('.main-nav').css({'display': 'block'});
		}
	}


	/* ---------------------------------------------
	 Header Animation
	 --------------------------------------------- */
	function initHeaderAnimation(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 100){
			$('.header').removeClass('header-hidden');
			$('.header').addClass('header-visible');
		}else{
			$('.header').removeClass('header-visible');
			$('.header').addClass('header-hidden');
		}
	}


	/* ---------------------------------------------
	 Magnific Popup Plugin
	 --------------------------------------------- */
	function initMagnificPopup(){
		$('.portfolio-mfp').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$(".video-mfp").magnificPopup({
			type: 'iframe',
			gallery: {
				enabled: true
			}
		});
	}


	/* ---------------------------------------------
	 Masonry
	 --------------------------------------------- */
	function initMasonry(){
		$(".masonry").imagesLoaded(function(){
			$(".masonry").masonry();
		});
	}


	/* ---------------------------------------------
	 Portfolio
	 --------------------------------------------- */
	function initPortfolio(){
		$('.portfolio-items').imagesLoaded(function(){
			$('.portfolio-items').show();
			$('.portfolio-items').isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});

		$('.filter').find('a').on('click', function(){
			$('.portfolio-items').isotope({
				filter	: $(this).attr('data-filter'),
				animationOptions: {
					duration: 750,
					queue: false,
				}
			});
			return false;
		});

		$('.filter a').on('click', function(){
			if (!$(this).hasClass('active')){
				$('.filter a').removeClass('active');
				$(this).addClass('active');
			}
		});
	}


	/* ---------------------------------------------
	 Portfolio Resize
	 --------------------------------------------- */
	function initPortfolioResize(){
		$('.portfolio-items').isotope({
			filter	: $('.filter').find('a.active').attr('data-filter'),
			animationOptions: {
				duration: 750,
				queue: false,
			}
		});
		return false;
	}


	/* ---------------------------------------------
	 Progress Bar Animation
	 --------------------------------------------- */
	function initProgressBar(){
		$('.progress-bar > span').each(function(){
	        var $this = $(this);
	        var width = $(this).data('percent');
	        $this.css({
	            'transition' : 'width 1.5s'
	        });

	        setTimeout(function() {
	            $this.filter(':visible').waypoint(function(direction) {
	                if( direction === 'down' ) {
	                    $this.css('width', width + '%');
	                }
	            } , { offset: '100%' } );
	        }, 500);
	    });
	}


	/* ---------------------------------------------
	 All Carousels
	 --------------------------------------------- */
	function initCarousel(){
		$('.portfolio-carousel').owlCarousel({
			pagination: true,
			navigation: false,
			autoPlay: true,
			singleItem : true,
			slideSpeed : 500,
			navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
		});
		$('.client-carousel').owlCarousel({
			pagination: false,
			navigation: false,
			autoPlay: true,
			slideSpeed : 500,
			items : 5,
			itemsDesktop : [991,3],
			itemsDesktopSmall : [768,3]
		});
	}


	/* ---------------------------------------------
	 Wow Animation
	 --------------------------------------------- */
	function initWowAnimation(){
		var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 150,
				mobile: false,
				live: true
			}
		);
		wow.init();
	}



	/* ---------------------------------------------
	 Contact Form
	 --------------------------------------------- */
	function initContactForm(){
		$("#c-form").validator().on("submit", function (e){
			if (e.isDefaultPrevented()){
				submitMSG(false, "YOU MUST NOT LEFT ANYTHING EMPTY!");
			} else{
				e.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			var name = $("#name").val();
			var email = $("#email").val();
			var message = $("#message").val();

			$.ajax({
				type: "POST",
				url: "inc/form-process.php",
				data: "name=" + name + "&email=" + email + "&message=" + message,
				success : function(text){
					if (text == "success"){
						formSuccess();
					} else{
						submitMSG(false,text);
					}
				}
			});
		}

		function formSuccess(){
			$("#c-form")[0].reset();
			submitMSG(true, "WE'VE GOT YOUR MESSAGE! THANK YOU!")
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "c-form-alert c-form-success fadeInUp animated";
			} else{
				var msgClasses = "c-form-alert c-form-error fadeInDown animated";
			}
			$("#c-form-status").removeClass().addClass(msgClasses).text(msg);
		}
	}


	/* ---------------------------------------------
	 Google Map
	 --------------------------------------------- */
	function initGoogleMap(){
		$('.contact-map-btn').on('click', function(){
			$('.g-map-wrapper').toggleClass('g-map-visible');
		});

		if(document.getElementById('g-map')){
			var latitude = document.getElementById('g-map').getAttribute('data-latitude'),
				longitude = document.getElementById('g-map').getAttribute('data-longitude');
		}else{
			return;
		}

		var mapOptions = {
			scrollwheel: false,
			zoom: 14,
			center: new google.maps.LatLng(latitude, longitude),
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_RIGHT
			},
			styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
		};
		var contentString = '<div id="mapcontent">I\'M HERE!</div>';
		var infowindow = new google.maps.InfoWindow({
			maxWidth: 320,
			content: contentString
		});
		var mapElement = document.getElementById('g-map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = new google.maps.MarkerImage('img/marker.png',
			null, null, null, new google.maps.Size(34,48))

		var myLatLng = new google.maps.LatLng(latitude, longitude);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			title: 'Hello World!'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

})(jQuery);
