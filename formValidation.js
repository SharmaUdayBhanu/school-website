// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     if (name.length > 20) {
//         alert("Name should be less than 20 characters");
//         event.preventDefault();
//         return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//         alert("Phone number should be 10 digits and contain only numbers");
//         event.preventDefault();
//         return;
//     }
//     if (!isValidEmail(email)) {
//         alert("Please enter a valid email address");
//         return;
//     }
// });

// function isValidEmail(email) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// }


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if (name.length > 20) {
        alert("Name should be less than 20 characters");
        event.preventDefault();
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number should be 10 digits and contain only numbers");
        event.preventDefault();
        return;
    }
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
        return;
    }
});

function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(function (param) {
        const [key, value] = param.split("=");
        params[key] = decodeURIComponent(value);
    });
    return params;
}

function displayMessage() {
    const params = getQueryParams();
    const messageDiv = document.getElementById("message");
    if (params.status) {
        messageDiv.style.display = "block";
        if (params.status === "success") {
            messageDiv.classList.add("success");
            messageDiv.innerText = "Thank you for your submission!";
        } else if (params.status === "error") {
            messageDiv.classList.add("error");
            if (params.message === "name_length") {
                messageDiv.innerText = "Name should be less than 20 characters.";
            } else if (params.message === "invalid_phone") {
                messageDiv.innerText = "Phone number should be 10 digits and contain only numbers.";
            } else if (params.message === "invalid_email") {
                messageDiv.innerText = "Invalid email format.";
            } else if (params.message === "email_failed") {
                messageDiv.innerText = "Failed to send email.";
            } else if (params.message === "invalid_request") {
                messageDiv.innerText = "Invalid request method.";
            } else {
                messageDiv.innerText = "An unknown error occurred.";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", displayMessage);