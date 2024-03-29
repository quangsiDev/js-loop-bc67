// khi nào sử dụng vòng lặp ?

// khi xử lý các công việc lặp đi lặp lại

/**
  while( điều kiện )
  {
    hành động
  }
 */
// vòng lặp vô tận => vòng điều kiện luôn luôn đúng => đứng máy

//   in ra chuỗi "hello 5 lần"

// biến đếm
var count = 2;

while (count < 5) {
  console.log("hello", count);
  //   tăng bước nhảy lên 1 đơn vị
  count++;
}

console.log("Kết thúc vòng lặp");
