/**

 do{
    hành động
 }while ( điều kiện )
 */
// in ra "hello 5 lần"

// do while ~ làm trước, kiểm tra sau => nếu điều kiện sai từ lần lặp đầu tiên thì vẫn chạy  hành động 1 lần
var count = 20;
do {
  console.log("hello");
  count++;
} while (count < 5);

console.log("out", count);

// input 3 => output 6

// input 30 => 465

// tính tổng từ 1 đến 30

var number = 1;
var total = 0;
do {
  total += number;
  number++;
} while (number <= 30);
console.log("😀 - total", total);
