function pickCard() {
  var i = Math.floor((Math.random() * 5));

  var links = new Array()
  links[0] = "n0.html";
  links[1] = "0.html";
  links[2] = "1.html";
  links[3] = "2.html";
  links[4] = "3.html";

  var x = document.getElementById("randomCard");
  x.href = links[i];
  console.log(x.href);
}
