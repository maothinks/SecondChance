$(document).ready(function () {
    new jBox('Modal', {
        attach: '#success',
        height: 200,
        content: ' <div class="text-center" style="color:black"><hr/><h4>Register Successfull!! </h4><hr/> <button class="btn btn-lg btn-primary btn-block" style="background-color:black" onclick="location.href = \'index.html\'">OK</button> </div>',
        animation: 'flip',
    });
});

function login() {
    if (validateLogin()) {
        location.href = "cards.html";
    }
}

function openRegisterPage() {

    location.href = "register.html";
}

function returnTologin() {

    location.href = "index.html";
}

new jBox('Confirm', {
    content: 'Do you really want to do this?',
    cancelButton: 'Nope',
    confirmButton: 'Sure do!'
});

function register() {
    if (validateRegister()) {
        $("#success").click();
    }
}

function validateRegister() {
    var result = true;
    var message = "";


    if (!$("#rb-male").is(":checked") && !$("#rb-female").is(":checked")) {
        message = "Please select a Genre"
        result = false;
    }


    if ($("#txt-pwd").val() != $("#txt-confirm-pwd").val()) {
        message = "Your password confirmation is wrong, please verify!"
        result = false;
    }

    if ($("#txt-confirm-pwd").val() == "") {
        message = "Please type a password confirmation!"
        result = false;
    }

    if ($("#txt-pwd").val() == "") {
        message = "Please type a Password!"
        result = false;
    }

    if ($("#txt-mobile-number").val() == "") {
        message = "Please type a Mobile Number!"
        result = false;
    }

    if ($("#txt-mobile-number-prefix").val() == "") {
        message = "Please type a prefix for your Mobile Number!"
        result = false;
    }

    if ($("#txt-telephone-number").val() == "") {
        message = "Please type a Telephone Number!"
        result = false;
    }

    if ($("#txt-name").val() == "") {
        message = "Please type a friendly name!"
        result = false;
    }

    if ($("#txt-email").val() == "") {
        message = "Please type an email!"
        result = false;
    }

    if (!result) {
        new jBox('Notice', {
            attributes: {
                x: 'right',
                y: 'top'
            },
            stack: false,
            animation: {
                open: 'tada',
                close: 'zoomIn'
            },
            autoClose: 5000,
            color: 'red',
            title: 'Oops!',
            content: message,
            delayOnHover: true,
            closeButton: true
        });
    }

    return result;
}

function validateLogin() {
    var result = true;
    var message = "";
    
    if ($("#txt-pwd").val() == "") {
        message = "Please type a Password!"
        result = false;
    }

    if ($("#txt-email").val() == "") {
        message = "Please type an email!"
        result = false;
    }

    if (!result) {
        new jBox('Notice', {
            attributes: {
                x: 'right',
                y: 'top'
            },
            stack: false,
            animation: {
                open: 'tada',
                close: 'zoomIn'
            },
            autoClose: 5000,
            color: 'red',
            title: 'Oops!',
            content: message,
            delayOnHover: true,
            closeButton: true
        });
    }

    return result;
}
