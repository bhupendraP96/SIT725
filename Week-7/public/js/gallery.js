
function submitForm() {
    let formData = {
        title: $('#title').val(),
        description: $('#description').val(),
        path: $('#path').val(),
        category: $('#category').val()
    };
    addImage(formData);
}

function displayImages(images) {
    images.forEach(function (image) {
        const imageCard = `
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="${image.path}" alt="${image.title}">
                </div>
                <div class="card-content">
                    <span class="card-title">${image.title}</span>
                    <p>${image.description}</p>
                    <p><strong class="category">Category:</strong> ${image.category}</p>
                </div>
            </div>
        </div>
        `;
        $('#imageList').append(imageCard);
    });
}

function addImage(image) {
    $.post('/api/gallery', image, function (response) {
        M.toast({ html: response.message })
    });
}

function getAllImages() {
    $.get('/api/gallery', function (res) {
        if (res.statusCode === 201) {
            displayImages(res.data);
        } else {
            $('#imageList').html("<h3>Error! Failed to get the images</h3>");
        }
    });
}

$(document).ready(function () {
    $('.modal').modal();

    // Form 
    $('#imageForm').submit(function (event) {
        event.preventDefault();

        submitForm();

        var instance = M.Modal.getInstance($('#imageFormModal'));
        instance.close();

        $('#title').val('');
        $('#description').val('');
        $('#path').val('');
        $('#category').val('');
    });

    getAllImages();
});