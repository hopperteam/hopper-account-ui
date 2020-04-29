const API_URL = "/api";

function checkPasswordsMatch() {
    let pw = $("#signUpPassword");
    let rpw = $("#repeatedPassword");
    if (pw.val() === rpw.val()) {
        rpw.removeClass("invalid");
    } else {
        rpw.addClass("invalid");
    }
}

function disableInputs() {
    $("input").prop( "disabled", true );
}

function enableInputs() {
    $("input").prop( "disabled", false );
}

function loginClick() {
    disableInputs();
    $.ajax(API_URL + "/login", {
        method: "POST",
        data: JSON.stringify({
            email: $("#email").val(),
            password: $("#password").val()
        })
    }).done(function(data) {
        console.log(data);
    }).fail(function(error) {
        $("#loginFailed").show()
        enableInputs();
    });
    return false
}

function clickSignUpTab() {
    $("#loginForm").hide();
    $("#loginTab").removeClass("active");
    $("#signUpForm").show();
    $("#signUpTab").addClass("active");
}

function clickLoginTab() {
    $("#signUpForm").hide();
    $("#signUpTab").removeClass("active");
    $("#loginForm").show();
    $("#loginTab").addClass("active");
}

function signUpClick() {
    let pwVal = $("#signUpPassword").val();
    if (pwVal !== $("#repeatedPassword").val()) return false;

    disableInputs();
    $.ajax(API_URL + "/signUp", {
        method: "POST",
        data: JSON.stringify({
            email: $("#signUpEmail").val(),
            password: pwVal,
            firstName: $("#signUpFirstName").val(),
            lastName: $("#signUpLastName").val(),
        })
    }).done(function(data) {
        console.log(data);
    }).fail(function(error) {
        $("#signUpFailed").show()
        enableInputs();
    });
    return false;
}
