function myFunction() {
  var x = document.getElementsByTagName("div");
  var i;
  for (i = 0; i <= 10; i++) {
    if ((i + 1) % 2 == 0) {
      x[i].style.backgroundColor = "red";
    } else {
      x[i].style.backgroundColor = "blue";
    }
  }
}
