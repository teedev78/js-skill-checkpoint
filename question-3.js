// Question 3: User Authentication

function authenticateUser(username, password) {
  const validUsername = "user123";
  const validPassword = "securepass";

  // เริ่มเขียนโค้ดตรงนี้
  // if (validUsername === username && validPassword === password) {
  //   return "Login successful.";
  // } else {
  //   return "Login failed. Please check your username and password.";
  // }

  return validUsername === username && validPassword === password
    ? "Login successful."
    : "Login failed. Please check your username and password.";
}

// ตัวอย่างการใช้งาน
const username1 = "user123";
const password1 = "securepass";

const username2 = "guest";
const password2 = "password123";

console.log(authenticateUser(username1, password1)); // Login successful.
console.log(authenticateUser(username2, password2)); // Login failed. Please check your username and password.
