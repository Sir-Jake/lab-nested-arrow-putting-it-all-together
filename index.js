//Aquiring user information
function userInfo (username, password) {
return {username , password};
}

//Creation of login tracker
function createLoginTracker(userInfo) {
  let attemptCount = 0;

//Inner arrow function
 return (passwordAttempt) =>{
//Counting number of attempts
attemptCount++;

if (attemptCount > 3) {
  return "Account locked due to too many failed login attempts";
}
//Check for password and username
//Successful login
if (passwordAttempt === userInfo.password) {
  return "Login successful" 
}
//Failed login
  return `Attempt ${attemptCount}: Login failed`;
};
}
//Exportationnnnnnn
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
