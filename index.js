var email = document.getElementById("mail");

email.addEventListener("keyup", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Provide a valid email address");
    } else {
        email.setCustomValidity("");
    }
});