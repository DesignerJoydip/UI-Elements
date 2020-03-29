if ($(".header-main-menu").length) {
    //console.log($(".header-main-menu").length);
    var nav_class = 'header-main-menu';

function desktop_menu_hover() {
    $('.' + nav_class).each(function () {
        $(this).each(function () {
            if ($(this).hasClass("megamenuList")) {
                
                /*$(this).find('li').hover(
                    function () {
                        $(this).children('ul').stop().slideDown();
                    }
                );*/
            }else{
                $(this).find('li').hover(
                    function () {
                        $(this).children('ul').stop().delay(300).slideDown(300);
                    },
                    function () {
                        $('ul', this).stop().slideUp(100);
                    }
                );
            }
        });
    });
}

//desktop_menu_hover();


header_menu = function(){
    
    $('.' + nav_class).each(function () {
        $(this).find('li').each(function () {
            $(this).has('ul').addClass('submenu');
            
            if ($(this).hasClass("megamenuList")) {

                //$(".fix").addClass("darkmenu")
                var get_container_width = $(".container").width();
                console.log(get_container_width);
                $(this).children('ul').css("width", get_container_width);
            };
        });

        if ($(window).width() >= 992) {

            $(this).removeClass('mobile-view');
            //$('.mobile-navbar').remove();
            $(this).parent().find('.mobile-navbar').remove();
            //console.log($(this).parent().find('.head-menulist').html());
            $(this).parent().find('.head-menulist').show();

            desktop_menu_hover();

        }else{
            $(this).addClass('mobile-view');

            var mobile_menu_heading_element = $(this).find(".mobile-navbar").length;
            if (mobile_menu_heading_element == 0) {
                $(this).prepend('<div class="mobile-navbar"><span class="burgermenu-icon"></span></div>');
            }
            
            $(this).find('li').each(function () {
                if ($(this).has('ul').length) {
                    var sub_dropdown = $(this).find(".sub-dropdown").length;
                    if (sub_dropdown == 0) {
                        $(this).prepend('<span class="sub-dropdown"></span>');
                        $(this).find(".sub-dropdown").on("click", function () {
                            $(this).toggleClass('expanded');
                            $(this).closest("li").children("ul").slideToggle();
                        });
                    }
                }
            });


            $(this).find(".burgermenu-icon").click(function (event) {
                $(this).toggleClass('opened');
                if ($(this).hasClass("opened")) {
                    //console.log("opened");
                    $(this).parent().parent().find('.head-menulist').slideDown(400);
                } else {
                    //console.log("closed");
                    $(this).parent().parent().find('.head-menulist').slideUp(400);
                }
                
            });


        }




        

    });

    

    
}


    $(window).on("resize", header_menu);

    $(window).on("load", header_menu);

}else{
    console.log("Main menu class can not find");
}

