function submit() {
  //  lấy value từ user
  var number = document.getElementById("txtNum").value * 1;
  // tạo biến đếm số lần lặp
  var count = 0;
  var contentHTML = "";
  while (number > 1) {
    var number = Math.floor(number / 2);
    count++;
    var text = ` <p>Count: ${count} - Number: ${number} </p> `;
    contentHTML += text;
  }
  //   hiển thị kết quả
  document.getElementById("noti").innerHTML = contentHTML;
}
