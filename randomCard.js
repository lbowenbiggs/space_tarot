function pickCard() {
  var i = Math.floor((Math.random() * 9));

  var links = new Array()
  links[0] = "n0.html";
  links[1] = "0.html";
  links[2] = "1.html";
  links[3] = "2.html";
  links[4] = "3.html";
  links[5] = "4.html";
  links[6] = "5.html";
  links[7] = "6.html";
  links[8] = "7.html";

  var x = document.getElementById("randomCard");
  x.href = links[i];
  console.log(x.href);
}
