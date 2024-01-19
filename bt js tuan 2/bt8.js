function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
  
  function validateEmailPassword(email, password) {
    if (validateEmail(email) && validatePassword(password)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Sử dụng hàm kiểm tra
  const email = "example@example.com";
  const password = "StrongPassword123@";
  if (validateEmailPassword(email, password)) {
    console.log("Email và password hợp lệ");
  } else {
    console.log("Email hoặc password không hợp lệ");
  }