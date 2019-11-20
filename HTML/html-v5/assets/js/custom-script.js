/* stickyHeaderAnimate script start */
(function($) {
	'use strict';

		// define class and elements
		var FullHeaderElement = ".header";
		var StikyElement = ".StickyElementAfterScroll";
		var StikyClass = "Sticky";

		// animation function
		function stickyHeaderAnimate(){
			var FullHeaderElementHeight = $(FullHeaderElement).outerHeight();
			$(FullHeaderElement).css("min-height", FullHeaderElementHeight+"px");
			//console.log(FullHeaderElementHeight);
			var scrollTop = $(window).scrollTop();
			var PrevSectionOfStikyElement = $(StikyElement).prev().outerHeight();
			var StikyElementOffset = scrollTop - PrevSectionOfStikyElement;
			if(scrollTop>=PrevSectionOfStikyElement){
				$(StikyElement).addClass(StikyClass);
			}else{
				$(StikyElement).removeClass(StikyClass);
			}	
		}

		// on ducument ready
		stickyHeaderAnimate();

		// on window scroll
		jQuery(window).on('scroll', function(){
			stickyHeaderAnimate();		 
		});

		// on window resize
		jQuery(window).on('resize', function(){
			stickyHeaderAnimate();		 
		});

	}).apply(this, [jQuery]);
    /* stickyHeaderAnimate script ended */
    

    $('.slick-animated-normal-slider').slick({
		dots: false,
		infinite: true,
		arrows:true,
		autoplay: true,
		speed: 800,
		//lazyLoad: 'progressive',
		fade: true,
		//cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: false,
		//nextArrow: '<i class="fa fa-arrow-right"></i>',
		//prevArrow: '<i class="fa fa-arrow-left"></i>',
		
	}).slickAnimation();

$('.featured-slider').slick({
	dots: false,
	infinite: true,
	arrows: true,
	autoplay: true,
	centerMode: false,
	speed: 800,
	//lazyLoad: 'progressive',
	fade: false,
	//cssEase: 'linear',
	slidesToShow: 4,
	slidesToScroll: 1,
	rtl: false,
	appendArrows: ".arrow-wrap-for-featured"
	//nextArrow: '<i class="fa fa-arrow-right"></i>',
	//prevArrow: '<i class="fa fa-arrow-left"></i>',

});

$('.skill-slider').slick({
	dots: false,
	infinite: true,
	arrows: true,
	autoplay: true,
	centerMode: false,
	speed: 800,
	//lazyLoad: 'progressive',
	fade: false,
	//cssEase: 'linear',
	slidesToShow: 4,
	slidesToScroll: 1,
	rtl: false,
	appendArrows: ".arrow-wrap-for-skill"
	//nextArrow: '<i class="fa fa-arrow-right"></i>',
	//prevArrow: '<i class="fa fa-arrow-left"></i>',

});


$('.testimonial-slider').slick({
	dots: true,
	infinite: true,
	arrows: false,
	autoplay: true,
	centerMode: false,
	speed: 800,
	//lazyLoad: 'progressive',
	fade: false,
	//cssEase: 'linear',
	slidesToShow: 2,
	slidesToScroll: 1,
	rtl: false,
	//appendArrows: ".arrow-wrap-for-skill"
	//nextArrow: '<i class="fa fa-arrow-right"></i>',
	//prevArrow: '<i class="fa fa-arrow-left"></i>',

});


$('.brand-slider').slick({
	dots: false,
	infinite: true,
	arrows: false,
	autoplay: true,
	centerMode: false,
	speed: 800,
	//lazyLoad: 'progressive',
	fade: false,
	//cssEase: 'linear',
	slidesToShow: 4,
	slidesToScroll: 1,
	rtl: false,
	//appendArrows: ".arrow-wrap-for-skill"
	//nextArrow: '<i class="fa fa-arrow-right"></i>',
	//prevArrow: '<i class="fa fa-arrow-left"></i>',

});

    


    /* window load script start */
jQuery(window).on("load", function (e) { 

    /* preloader script */
    jQuery("#preloader").fadeOut(); 

});
/* window load script ended */