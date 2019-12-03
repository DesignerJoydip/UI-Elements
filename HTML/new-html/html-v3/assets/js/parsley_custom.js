$(document).ready(function () {
    $.extend(Parsley.options, {
        errorClass: 'has-error',
        successClass: 'has-success',
        classHandler: function (el) {
            return el.$element.closest(".form-group");
        },
        errorsWrapper: '<span class="help-block">',
        errorTemplate: '<div></div>'
    });

    
    $('.formvalidate').parsley();

});
