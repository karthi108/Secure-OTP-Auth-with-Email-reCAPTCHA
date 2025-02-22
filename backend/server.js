require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { storeOTP, verifyOTP, deleteOTP } = require("./otpStore");

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

console.log(`Current server time: ${Date.now()}`);

app.post("/send-otp", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const otp = generateOTP();
    storeOTP(email, otp); 

    console.log(`Sending OTP to ${email}: ${otp}`); 

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${otp}. It will expire in 5 minutes.`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: "Error sending OTP" });
        }
        res.json({ message: "OTP sent successfully" });
    });
});


app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

    if (verifyOTP(email, otp)) {
        return res.json({ message: "OTP Verified Successfully!", success: true });
    } else {
        return res.status(400).json({ message: "Invalid or expired OTP", success: false });
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
