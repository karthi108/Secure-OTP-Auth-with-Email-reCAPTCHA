const inactivityTime = 5000;

let timeout; 
 
function logoutUser() {
  alert("You have been logged out due to inactivity.");
  window.location.href = 'login.html';  
}
 
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(logoutUser, inactivityTime);
}

document.onload = resetTimer; 
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onclick = resetTimer; 

resetTimer();
