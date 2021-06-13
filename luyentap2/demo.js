document
  .getElementById("TongSoChanWhite")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var count = 0;
    var tong = 0;
    while (count <= n) {
      if (count % 2 == 0) {
        tong += count;
      }
      count++;
    }

    document.getElementById("footerCard").innerHTML = tong;
  });

document
  .getElementById("TongSoChanFor")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var n = document.getElementById("txtSoNguyen").value * 1;
    var tong = 0;
    for (var i = 0; i <= n; i++) {
      if (i % 2 == 0) {
        tong += i;
      }
    }
    document.getElementById("footerCard").innerHTML = tong;
  });
