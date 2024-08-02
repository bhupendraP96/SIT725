$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        var email = $('#email').val();
        $('.message').html(`Thank you!! <strong>${email}</strong> for subscribing to our newsletter.`);
        $('#email').val('');
    })
    
});