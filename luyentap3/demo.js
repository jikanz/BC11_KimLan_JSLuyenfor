document
  .getElementById("inTongSoChia3While")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var count = 0;
    var sochiahet = 0;
    while (count <= n) {
      if (count % 3 == 0) {
        sochiahet = count++ / 3;
      }
      count++;
    }
    document.getElementById("footerCard").innerHTML =
      "Tổng số chia hết cho 3 là : " + sochiahet;
  });
document
  .getElementById("inTongSoChia3For")
  .addEventListener("click", function () {
    var n = document.getElementById("txtSoNguyen").value * 1;
    var tong = 0;
    for (var i = 0; i <= n; i++) {
      if (i % 3 == 0) {
        tong += i / 3;
      }
    }
    document.getElementById("footerCard").innerHTML =
      "Tổng số chia hết cho 3 : " + tong;
  });
