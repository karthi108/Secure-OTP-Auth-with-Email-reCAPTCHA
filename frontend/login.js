document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
 
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Check if reCAPTCHA was completed
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Please complete the CAPTCHA.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

if (storedUser && storedUser.email === email && storedUser.password === password) {
  alert("Login successful!");
  window.location.href = "otp.html";
} else {
  alert("Invalid email or password.");
} 
});

function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
