
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
          slidesToScroll: 1
        }
      }
    ]
  });
  // home expert section slider script ended ---------------------------------


  // custom select dropdown script start -------------------------------------
  $(".custom-select-dropdown").select2({
    allowClear: true,
    minimumResultsForSearch: -1,
  });
  // custom select dropdown script ended -------------------------------------


});


$(window).resize(function(){

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

