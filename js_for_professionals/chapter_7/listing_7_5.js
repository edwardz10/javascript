window.addEventListener('DOMContentLoaded', function(){
    var outputDiv = document.getElementById('vResults');
    var firstName = document.getElementById('firstName');

    firstName.addEventListener('focus', function() {
        outputDiv.innerHTML = '';
    });

    function preventDefaultHandler(evt) {
        evt.preventDefault();
    }

    firstName.addEventListener('invalid', function (event) {
        outputDiv.innerHTML = 'firstName is invalid';
    })

    document.getElementById('firstNameBtn').addEventListener('click', function() {
        firstName.checkValidity();
    });

    document.getElementById('formBtn').addEventListener('click', function() {
        document.getElementById('nameForm').checkValidity();
    });

    document.getElementById('preventBtn').addEventListener('click', function() {
        firstName.addEventListener('invalid', preventDefaultHandler);
    });

    document.getElementById('restoreBtn').addEventListener('click', function() {
        firstName.removeEventListener('invalid', preventDefaultHandler);
    });

});

