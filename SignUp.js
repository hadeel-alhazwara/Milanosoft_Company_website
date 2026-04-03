// document.getElementById('toggleSignupPassword').addEventListener('click', function() {
//     const passwordInput = document.getElementById('signupPassword');
//     const icon = this.querySelector('i');
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         icon.classList.replace('fa-eye', 'fa-eye-slash');
//     } else {
//         passwordInput.type = 'password';
//         icon.classList.replace('fa-eye-slash', 'fa-eye');
//     }
// });

document.getElementById('signUp').addEventListener('submit',function(e){

  e.preventDefault();
  alert("Account Created Successfully !");
  alert("Redirecting to Login ...");
  window.location.href="Login.html";
});

// const passwordField = document.getElementById('password');
// const togglePassword = document.getElementsByClassName('icon');

// togglePassword.addEventListener('click', function() {
//   const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
//   passwordField.setAttribute('type', type);
//   this.innerHTML = type === 'password' ? '<img src="eye.png" />' : '<img src="eye.png" />';
// });

