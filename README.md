# Secure-OTP-Auth-with-Email-reCAPTCHA

## Overview

This project implements a secure OTP verification system using Node.js for the backend and basic HTML, CSS, and JavaScript for the frontend. The system allows users to enter their email, receive a One-Time Password (OTP) on their email, and then verify the OTP within a specified time limit. Additionally, Google reCAPTCHA has been integrated to prevent bots from submitting OTP requests.

### Features:
- OTP is sent to the user's email.
- OTP expiration time is set to 10 minutes.
- Secure OTP verification with backend validation.
- Google reCAPTCHA integration to prevent spam and abuse.

## Technologies Used

- **Backend**: Node.js, Express, Nodemailer
- **Frontend**: HTML, CSS, JavaScript
- **Storage**: In-memory OTP storage (can be replaced with a database in production)
- **Authentication**: Google SMTP for sending OTP emails## Technologies Used

- **Backend**: Node.js, Express, Nodemailer
- **Frontend**: HTML, CSS, JavaScript
- **Storage**: In-memory OTP storage (can be replaced with a database in production)
- **Authentication**: Google SMTP for sending OTP emails

## Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Google reCAPTCHA API keys (as described inside frontend folder Captcha File)

### Steps

1. Clone the repository:
    bash
    git clone https://github.com/your-username/Secure-OTP-Auth-with-Email-reCAPTCHA.git
    cd Secure-OTP-Auth-with-Email-reCAPTCHA
    

2. Install backend dependencies:
    bash
    cd backend
    npm install
    

3. Set up environment variables:
    - Copy `.env.example` to `.env` and update the `EMAIL_USER` and `EMAIL_PASS` with your Gmail credentials.
    env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    

4. Start the backend server:
    bash
    node server.js
    

5. Open the frontend files in the `frontend/` folder in your browser. You can open `register.html` to test the registeration and the authentication flow.

### How it Works

1. **Frontend:**
    - The user completes the Registeration on register.html and Login process on login.html then enters their email on the `otp.html` page.
    - The frontend calls the backend API `/send-otp` to send the OTP to the user's email.
    - The user receives an OTP and enters it on the same page to verify.
    - The frontend calls the backend API `/verify-otp` to validate the OTP.
    - If the OTP is valid and within the expiration time, the user is redirected to `success.html`.
    - Where the user see the GOOGLE Search they can search what ever they want.

2. **Backend:**
    - The backend generates a random OTP and sends it to the user via Gmail using the Nodemailer service.
    - OTPs are stored in-memory for validation, and an expiry time is set (default 5 minutes).
    - The backend checks if the OTP is valid and not expired upon user verification.
  

### THANK YOU
