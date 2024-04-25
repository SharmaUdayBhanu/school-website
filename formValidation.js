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
        return;
    }
});

function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}