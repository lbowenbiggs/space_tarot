function pickCard() {
  var i = Math.floor((Math.random() * 4));

  var links = new Array()
  links[0] = "n0";
  links[1] = "0";
  links[2] = "1";
  links[3] = "2";

  var x = document.getElementById("randomCard");
  x.href = links[i];
  console.log(x.href);
}
