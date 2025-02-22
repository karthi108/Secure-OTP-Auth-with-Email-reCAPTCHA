let otpStorage = {};
const OTP_EXPIRY_TIME = 10 * 60 * 1000; 

function storeOTP(email, otp) {
    const otpData = {
        otp: otp, 
        timestamp: Date.now()
    };
    otpStorage[email] = otpData;
    console.log(`OTP for ${email} stored: ${otp}`); 
    console.log(`Stored OTP timestamp for ${email}: ${otpData.timestamp}`);
}

function verifyOTP(email, otp) {
    const otpData = otpStorage[email];

    if (!otpData) {
        console.log(`No OTP found for ${email}`);
        return false;
    }

    const currentTime = Date.now();
    console.log(`Current time: ${currentTime}`);

    const timeElapsed = currentTime - otpData.timestamp;
    console.log(`Time elapsed for ${email}: ${timeElapsed}ms`);

    if (timeElapsed > OTP_EXPIRY_TIME) {
        console.log(`OTP for ${email} has expired`); 
        delete otpStorage[email]; 
        return false;
    }

    if (otpData.otp == otp) {
        console.log(`OTP for ${email} verified successfully`);
        return true;
    }

    console.log(`Invalid OTP for ${email}`);
    return false;
}

function deleteOTP(email) {
    delete otpStorage[email];
    console.log(`OTP for ${email} deleted after verification`); 
}

module.exports = { storeOTP, verifyOTP, deleteOTP };
