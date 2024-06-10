// Lấy thời gian hiện tại
const now = new Date();

// Lấy thời gian mục tiêu
const targetDate = new Date(2024, 11, 31, 23, 59, 59);

// Tính toán thời gian còn lại
const timeRemaining = targetDate - now;

// Chuyển đổi thời gian còn lại sang các đơn vị phù hợp
const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

// Cập nhật giao diện
document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;

// Cập nhật giao diện mỗi giây
setInterval(() => {
    // Tính toán thời gian còn lại
    const timeRemaining = targetDate - new Date();

    // Chuyển đổi thời gian còn lại sang các đơn vị phù hợp
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Cập nhật giao diện
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}, 1000);