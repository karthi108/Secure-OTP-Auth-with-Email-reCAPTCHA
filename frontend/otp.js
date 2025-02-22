async function sendOTP() {
    let email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    let response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    let result = await response.json();
    alert(result.message);
}

async function verifyOTP() {
    let email = document.getElementById("email").value;
    let otp = document.getElementById("otp_inp").value;

    let response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
    });

    let result = await response.json();
    alert(result.message);

    if (result.success) {
        window.location.href = "success.html";
    }
}


document.getElementById("otp-btn").addEventListener("click", function (event) {
    event.preventDefault();
    verifyOTP();
});
