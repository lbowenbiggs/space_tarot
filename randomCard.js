function pickCard() {
  var i = Math.floor((Math.random() * 19));

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
  links[9] = "8.html";
  links[10] = "9.html";
  links[11] = "10.html";
  links[12] = "11.html";
  links[13] = "12.html";
  links[14] = "13.html";
  links[15] = "14.html";
  links[16] = "15.html";
  links[17] = "16.html";
  links[18] = "17.html";

  var x = document.getElementById("randomCard");
  x.href = links[i];
  console.log(x.href);
}
