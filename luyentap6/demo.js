document.getElementById("dapAn").addEventListener("click", function (event) {
  event.preventDefault();
  var n = document.getElementById("txtSoNguyen2").value * 1;
  var sum = 1;
  for (i = 1; i <= n; i++) {
    sum = i * sum;
  }
  document.getElementById("footerCard").innerHTML = sum;
});
