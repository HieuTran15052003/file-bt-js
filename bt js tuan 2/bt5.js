function isValidEmail(email) {
  const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  if (password.length > 10 || /[^a-zA-Z0-9]/.test(password)) {
    return false;
  }
  return true;
}

const email = "Example1434@gmail.com";
const password = "Password54654";

if (isValidEmail(email) && isValidPassword(password)) {
  console.log("Email và password hợp lệ");
} else {
  console.log("Email và password không hợp lệ");
}