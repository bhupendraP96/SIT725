$(document).ready(function () {
    let socket = io();

    $('#contactForm').submit(function (e) {
        e.preventDefault();

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val(),
        };
        socket.emit('formSubmission', formData);

        // Clearing form fields
        $('#contactForm')[0].reset();
    });

    socket.on('formSubmitted',  (responseMessage) => {
        $('#formResponse').text(responseMessage);
    });
});
