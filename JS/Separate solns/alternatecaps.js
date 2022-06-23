// 7 Kyu | Alternate caps

function capitalize(s) {
  str1 = [];
  str2 = [];
  s = s.split("");
  for (i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      str1[i] = s[i].toUpperCase();
      str2[i] = s[i].toLowerCase();
    } else {
      str2[i] = s[i].toUpperCase();
      str1[i] = s[i].toLowerCase();
    }
  }
  return [str1.join(""), str2.join("")];
}
