document.getElementById("dapAn").addEventListener("click", function (event) {
  event.preventDefault();
  var Number = document.getElementById("txtSoNguyen").value * 1;
  var dem = "";

  for (var i = 1; i <= Number; i++) {
    if (ktsnt(i)) {
      dem += i + " ";
    }
  }

  document.getElementById("footerCard").innerHTML = "số nguyên tố là :" + dem;
});
function ktsnt(x) {
  var dem = true;
  if (x < 2) {
    dem = false;
  } else if (x == 2) {
    dem = true;
  } else if (x % 2 == 0) {
    dem = false;
  } else {
    for (var i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i == 0) {
        dem = false;
        break;
      }
    }
  }
  return dem;
}
