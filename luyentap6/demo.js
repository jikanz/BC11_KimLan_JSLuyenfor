document.getElementById("dapAn").addEventListener("click", function (event) {
  event.preventDefault();
  var number = document.getElementById("txtSoNguyen2").value * 1;
  var tong = 1;
  for (i = 1; i <= number; i++) {
    tong *= i;
  }
  document.getElementById("footerCard").innerHTML = tong;
});
