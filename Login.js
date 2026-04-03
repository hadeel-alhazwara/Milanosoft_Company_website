
// document.getElementById('toggleLoginPassword').addEventListener('click', function() {
//     const passwordInput = document.getElementById('loginPassword');
//     const icon = this.querySelector('i');
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         icon.classList.replace('fa-eye', 'fa-eye-slash');
//     } else {
//         passwordInput.type = 'password';
//         icon.classList.replace('fa-eye-slash', 'fa-eye');
//     }
// });

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");


    if (password === "776604262") {
        window.location.href = "index.html"; 
    } else {
       // alert("Invalid password. Please try again.");
        errorMessage.textContent = "Invalid password. Please try again.";
    }
});

const passwordField = document.getElementById('password');
const togglePassword = document.getElementsByClassName('icon');

togglePassword.addEventListener('click', function() {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.innerHTML = type === 'password' ? '<img src="eye.png" />' : '<img src="eye.png" />';
});