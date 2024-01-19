function isPrimeNumber(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        console.log(x + " không phải là số nguyên tố");
        return;
      }
    }
    console.log(x + " là số nguyên tố");
  }
  
  // Sử dụng hàm để kiểm tra số 3
  isPrimeNumber(3);
  