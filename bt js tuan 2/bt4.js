// Khai báo ma trận 3x3
const matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 0]
  ];
  
  // Hiển thị ma trận
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + " ";
    }
    console.log("| " + row + "|");
  }