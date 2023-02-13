function XO(str) {
  let exes = 0;
  let ohs = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char == "x") {
        exes++;
      } else if (char == "o") {
        ohs++;
      }
    });
  return exes == ohs;
}

console.log(XO("testingaxeloxenfoxy"));
