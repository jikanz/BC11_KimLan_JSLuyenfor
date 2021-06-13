document.getElementById("dapAn").addEventListener("click", function (event) {
  event.preventDefault();
  var number = document.getElementById("txtSoNguyen").value * 1;
  var demSo = " ";
  var soCanTim = "";
  var tong = 0;
  for (var i = 1; i <= number; i++) {
    demSo += i + " ";
    tong += i;
    if (tong > 10000) {
      soCanTim = i;
      break;
    }
  }

  var info = "<div>số cần tìm là " + soCanTim + "</div>";
  document.getElementById("footerCard").innerHTML = info;
});
