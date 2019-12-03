$(document).ready(function () {
    $('#frmContact').parsley().on('form:submit', function () {
        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var contactType = $('#contact_type').val();
        var contactTypeText = $('#contact_type :selected').text();

        // var loaderHtml      = '<div class="dataloading-spiner"><img class="continuespin" src="{{asset('assets/images/groupe549.svg')}}" alt="Loader"><img class="continuespin" src="{{asset('assets/images/groupe549.svg')}}" alt="Loader"><img class="continuespin" src="{{asset('assets/images/groupe549.svg')}}" alt="Loader"></div>';

        var loaderHtml = '<div class="dataloading-spiner"></div>';

            $('#contactMsg').html(loaderHtml);
            $('#btnContact').prop('disabled', true);
            
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            //alert(base_url+'/addContact'); 
            //return false;
            $.ajax({
                url: baseUrl+'/addContact',
                type: "POST",
                data: {
                    'firstName'         : firstName,
                    'lastName'          : lastName,
                    'email'             : email,
                    'phone'             : phone,
                    'contactType'       : contactType,
                    'contactTypeText'   : contactTypeText
                },
                success: function(res){
                    if(res == 1) {
                        var msg = "Votre message a bien été transmis à nos équipes !";
                        $("#frmContact .required").val('');
                        $('#terms').prop('checked', false);
                        $('#contactMsg').removeClass('errorMsg');
                        $('#contactMsg').addClass('successMsg');
                        $('#contactMsg').html(msg);
                        // ga('send','event', { eventCategory: 'Contact', eventAction: 'Submit', eventLabel: 'Contact Page Form', eventValue: 1});
                        //alert(1);
                    } else {
                        var msg = "Échec de la soumission";
                        $('#contactMsg').addClass('errorMsg');
                        $('#contactMsg').removeClass('successMsg');
                        $('#contactMsg').html(msg);
                    }
                    $('#btnContact').prop('disabled', false);
                }
            })
            return false; // Don't submit form for this demo
        });

});