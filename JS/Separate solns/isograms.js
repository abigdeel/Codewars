// 7 Kyu || Isograms

function isIsogram(str) {
  str = str.toLowerCase();
  let isIso = true;
  if (str == "") {
    isIso = true;
  }
  str.split("").forEach((char, index) => {
    if (str.indexOf(char) !== index) {
      isIso = false;
    }
  });
  return isIso;
}

console.log(isIsogram("testing"));
console.log(isIsogram("Dermatoglyphics"));
