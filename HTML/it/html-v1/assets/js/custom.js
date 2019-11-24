

// mobile menu function script start --------------------------------------------
function mobile_menu(){

  var design_break_point = 992;
  var mobile_menu_main_class = 'menu_area';
  var mobile_menu_open_button_class = 'flyout_menu_open_btn';
  var mobile_menu_closed_button_class = 'flyout_menu_close_btn';

  //console.log($("."+mobile_menu_main_class + " li").has("ul").length);

  var select_li_has_submenu = $("." + mobile_menu_main_class + " li");

  select_li_has_submenu.each(function(){
    if ($(this).has("ul").length != 0){
      //console.log($(this).has("ul").length);
      $(this).has("ul").addClass("has-submenu");
      if ($(this).find(".dropdown").length ==0){
        $(this).has("ul").prepend('<span class="dropdown"></span>');
        $(this).find(".dropdown").click(function(){
          //console.log("clicked");
          $(this).closest("li").children("ul").toggleClass("opened");
        });
      }
    }
  });

  var get_window_width = $(window).width();
  //console.log(get_window_width);
  var mobile_menu_main_wrapper = $("."+mobile_menu_main_class);
  var mobile_menu_open_button_html = '<div class="'+mobile_menu_open_button_class+'"></div>';
  var mobile_menu_closed_button_html = '<div class="'+mobile_menu_closed_button_class+'"></div>';

  if(get_window_width >= design_break_point){
    //console.log("Desktop");
    $("."+mobile_menu_open_button_class).remove();
    $("."+mobile_menu_closed_button_class).remove();
  }else{
    //console.log("mobile");
    if(mobile_menu_main_wrapper.find("."+mobile_menu_closed_button_class).length == 0){
      mobile_menu_main_wrapper.parent().prepend(mobile_menu_open_button_html);
      mobile_menu_main_wrapper.prepend(mobile_menu_closed_button_html);
      $("."+mobile_menu_closed_button_class).click(function(){
        $(this).parent().removeClass("opened");
      });
      $("."+mobile_menu_open_button_class).click(function(){
        $(this).next().parent().find("."+mobile_menu_main_class).addClass("opened");
      });
    }
  }

}
// mobile menu function script closed ----------------------------------------



$(document).ready(function(){

  // WOW script start --------------------------------------------------------
  wow = new WOW();
  wow.init();
  // WOW script ended --------------------------------------------------------


  // home our services slider script start -----------------------------------
  $('.single-slide-slider-with-v-dot').slick({
    fade: true,
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 2000,
  }).slickAnimation();
  // home our services slider script ended -----------------------------------


  // home expert section slider script start ---------------------------------
  $('.expert-slide-slider').slick({
    fade: false,
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  // home expert section slider script ended ---------------------------------



  // slick slider one dot slider script start --------------------------------
  $('.slick-slider-one').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
    dots: true,
    arrows:true,
    focusOnSelect: true,
    //appendArrows: ".arrow-wrap",
    //appendDots: ".dot-wrap",
    appendArrows: ".horizontal-slider-controlar-wrapper",
    appendDots: ".horizontal-slider-controlar-wrapper",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // slick slider one dot slider script ended --------------------------------



  // custom select dropdown script start -------------------------------------
  $(".custom-select-dropdown").select2({
    allowClear: true,
    minimumResultsForSearch: -1,
  });
  // custom select dropdown script ended -------------------------------------



  // home talent section album script start ----------------------------------
  var image_icon_box_element = $(".talent-image-icon-box > .image-icon");
  var image_icon_box_active_class = "active-image-icon";
	var big_image_slide_element = $(".talent-big-image-slide");
	var total_icon_slide = image_icon_box_element.length;
	//console.log(total_icon_slide);
	//console.log(image_icon_box_element.length);
	if ($(big_image_slide_element).is(':empty')) {
		//console.log("empty");
    get_first_image_path = image_icon_box_element.first().attr("data-image");
    image_icon_box_element.first().addClass(image_icon_box_active_class);
		//console.log(get_first_image_path);
    big_image_slide_element.append("<img src='"+get_first_image_path+"' class='fixed-image' alt=''>");
    
    var time = 200;

		image_icon_box_element.each(function (index) {
			dynamic_icon_id = "image-icon-id-" + (index + 1);
			$(this).attr("id", dynamic_icon_id);
      //console.log(dynamic_icon_id);
      
      // auto event open
      /*setTimeout( function(){ 
        console.log("image-icon-id-"+(index+1));
        image_icon_box_element.removeClass(image_icon_box_active_class);
        $("#image-icon-id-"+(index+1)).addClass(image_icon_box_active_class);
        get_auto_active_image_icon_data = $("#image-icon-id-"+(index+1)).attr("data-image");
        big_image_slide_element.prepend("<img src='" + get_auto_active_image_icon_data + "' class='current-image' alt=''>");

        setTimeout(function () { 
					big_image_slide_element.find(".current-image").addClass("show");
					setTimeout(function () { 
						$(".fixed-image").attr("src", get_auto_active_image_icon_data);
						$(".current-image").remove();
					}, 1000);
				}, 100);
      }, time)
        time += 3000;*/
      // auto event closed


      /*if($(image_icon_box_element).hasClass(image_icon_box_active_class)){

      }*/

      
      // click event open
      $(this).click(function(){
        image_icon_box_element.removeClass(image_icon_box_active_class);
        $(this).addClass(image_icon_box_active_class);
				//console.log($(this).attr("data-image"));
				get_clicked_icon_data = $(this).attr("data-image");
				big_image_slide_element.prepend("<img src='" + get_clicked_icon_data + "' class='current-image' alt=''>");
				
				setTimeout(function () { 
					big_image_slide_element.find(".current-image").addClass("show");
					setTimeout(function () { 
						$(".fixed-image").attr("src", get_clicked_icon_data);
						$(".current-image").remove();
					}, 1000);
				}, 100);
      });
      // click event closed
			
		});
	}
  // home talent section album script ended ----------------------------------



  // header search script start ----------------------------------------------
  $(".header-search-btn").click(function(){
    $(".overlay-search-panel").addClass("opened");
    setTimeout(function () { 
      $(".search-field-area").addClass("visible");
    }, 500);
  });
  $(".search-close-btn").click(function(){
    $(".search-field-area").removeClass("visible");
    setTimeout(function () { 
      $(".search-close-btn").closest(".overlay-search-panel").removeClass("opened");
    }, 500);
  });
  // header search script ended ----------------------------------------------

  mobile_menu();
  
});



$(window).resize(function(){

  mobile_menu();

});


/* window load script start */
$(window).on("load", function (e) {

  // preloader script --------------------------------------------------------
  $("#preloader").fadeOut();


  // home blub animation script start ----------------------------------------
  setTimeout(function(){ 
      var animate_element = $(".blub-element");
      var totalside = animate_element.length;
      //console.log(totalside);
      var time = 200;
      animate_element.each(function(index){
        var slide_dynamic_id = index+1;
        $(this).attr("id", ("blub-element-"+slide_dynamic_id));
        setTimeout( function(){ 
          $("#blub-element-"+slide_dynamic_id).addClass("show");
          //console.log("element" + slide_dynamic_id );
          if(totalside==slide_dynamic_id){
            setTimeout(function(){ 
              //console.log("end"); 
              $(".blub-full-frame-area").addClass("let-animate");
            }, 1000);
          }
        }, time)
          time += 1000;
      });
  }, 2000);
  // home blub animation script ended ----------------------------------------

  

});
/* window load script ended */

