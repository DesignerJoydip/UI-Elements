(function ($) {
    "use strict";

    new WOW().init();
    
    

    
})(window.jQuery);


/* window load script start */
jQuery(window).on("load", function (e) { 

    /* preloader script */
    jQuery("#preloader").fadeOut(); 

});
/* window load script ended */


/* window scroll script start */
jQuery(window).scroll(function() {


});
/* window scroll script ended */



$('select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    var $getID = $(this).attr('id');

    $this.addClass('select-hidden');
    $this.wrap('<div class="select ' + $getID +'"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options ' + $getID
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            size: $this.children('option').eq(i).attr('size'),
            rel: $this.children('option').eq(i).val(),
            value: $this.children('option').eq(i).val(),
            text: $this.children('option').eq(i).text(),
            
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').slideUp();
        });
        $(this).toggleClass('active').next('ul.select-options').slideToggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.slideUp();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.slideUp();
    });

});


$(".rr").click(function(){
    var vval = $("#mounth").val();
    console.log(vval);
});