document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Logic to validate and process the login can be added here

    // Redirect to another page
    window.location.href = "index.html";
});

document.getElementById('resendOtp').addEventListener('click', function () {
    // Logic to resend OTP can be added here
    alert('OTP has been resent!');
});
