document
  .getElementById("inSoChanLeFor")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var number = document.getElementById("txt3KySo1").value * 1;
    var soChan = "";
    var soLe = "";
    for (var i = 0; i <= number; i++) {
      if (i % 2 === 0 && number < 100) {
        soChan += i + " ";
      } else if (i % 2 != 0 && number < 100) {
        soLe += i + " ";
      }
    }
    var info = "Số chẵn là :" + soChan + "<br>";
    info += "Số lẽ là:" + soLe;
    document.getElementById("footerCard").innerHTML = info;
  });

var n = 2;
while (n < 100) {
  var soChan = "";
  var soLe = "";
  if (n % 2 === 0 && n != 0) {
    soChan += n;
    n++;
  } else {
    soLe += n;
    n++;
  }
  console.log("số chẵn" + soChan);
  console.log("số lẽ" + soLe);
}
