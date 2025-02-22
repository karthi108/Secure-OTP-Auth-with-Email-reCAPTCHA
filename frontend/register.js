document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Please complete the CAPTCHA.");
    return;
  }

if (name && email && password) {
  // Store user info in localStorage (for simplicity)
  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Registration successful!");
  window.location.href = "login.html";
} else {
  alert("Please fill in all fields.");
}
});
function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}