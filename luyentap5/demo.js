document.getElementById("dapAn").addEventListener("click", function (event) {
  event.preventDefault();
  var x = document.getElementById("txtSoNguyen").value * 1;
  var n = document.getElementById("txtSoNguyen2").value * 1;
  var demSo = 1;
  var tongSoMu = 0;
  for (var i = 1; i <= n; i++) {
    demSo = soMu(x, i);
    tongSoMu += demSo;
  }

  document.getElementById("footerCard").innerHTML = tongSoMu;
});
function soMu(x, n) {
  return Math.pow(x, n);
}
