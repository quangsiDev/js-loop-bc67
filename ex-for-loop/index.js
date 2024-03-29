function inChanLe() {
  // kiểm tra số chẵn lẻ
  // % chia lấy dư
  var number = document.getElementById("txt-chan-le").value * 1;
  var stringChan = "";
  var stringLe = "";
  for (var i = 0; i <= number; i++) {
    // = : gán giá trị
    // == : so sánh
    if (i % 2 == 0) {
      stringChan = stringChan + i + " ";
    } else {
      stringLe = stringLe + i + " ";
    }
  }
  //   hiện thị kết quả
  document.getElementById("result-chan-le").innerHTML = ` <p class="text-danger">${stringChan}</p>
                <p class="text-primary">${stringLe}</p>`;
}

function tinhTongSoChan() {
  // input  2024
  var number = document.getElementById("txt-tong-so-chan").value * 1;
  var total = 0;
  for (var i = 0; i <= number; i = i + 2) {
    // if (i % 2 == 0) {
    total += i;
    // }
  }
  document.getElementById("result-tong-so-chan").innerText = total.toLocaleString();
}
