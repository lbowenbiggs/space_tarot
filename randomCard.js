function pickCard() {
  var i = Math.floor((Math.random() * 80));

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
  links[19] = "18.html";
  links[20] = "19.html";
  links[21] = "20.html";
  links[22] = "21.html";
  links[23] = "inf.html";
  links[24] = "sts.html";
  links[25] = "str.html";
  links[26] = "std.html";
  links[27] = "stc.html";
  // The pages below don't have their links formatted nicely yet
  links[28] = "rs.html";
  links[29] = "rr.html";
  links[30] = "rd.html";
  links[31] = "rc.html";
  links[32] = "ts.html";
  links[33] = "tr.html";
  links[34] = "td.html";
  links[35] = "tc.html";
  links[36] = "ss.html";
  links[37] = "sr.html";
  links[38] = "sd.html";
  links[39] = "sc.html";
  links[40] = "as.html";
  links[41] = "ar.html";
  links[42] = "ad.html";
  links[43] = "ac.html";
  links[44] = "2s.html";
  links[45] = "2r.html";
  links[46] = "2d.html";
  links[47] = "2c.html";
  links[48] = "3s.html";
  links[49] = "3r.html";
  links[50] = "3d.html";
  links[51] = "3c.html";
  links[52] = "4s.html";
  links[53] = "4r.html";
  links[54] = "4d.html";
  links[55] = "4c.html";
  links[56] = "5s.html";
  links[57] = "5r.html";
  links[58] = "5d.html";
  links[59] = "5c.html";
  links[60] = "6s.html";
  links[61] = "6r.html";
  links[62] = "6d.html";
  links[63] = "6c.html";
  links[64] = "7s.html";
  links[65] = "7r.html";
  links[66] = "7d.html";
  links[67] = "7c.html";
  links[68] = "8s.html";
  links[69] = "8r.html";
  links[70] = "8d.html";
  links[71] = "8c.html";
  links[72] = "9s.html";
  links[73] = "9r.html";
  links[74] = "9d.html";
  links[75] = "9c.html";
  links[76] = "10s.html";
  links[77] = "10r.html";
  links[78] = "10d.html";
  links[79] = "10c.html";

  var x = document.getElementById("randomCard");
  x.href = links[i];
  console.log(x.href);
}
