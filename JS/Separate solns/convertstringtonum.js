// 7 Kyu | Credit Card Mask

function maskify(cc) {
  return cc
    .split("")
    .map((char, index) => {
      return index < cc.length - 4 ? "#" : char;
    })
    .join("");
}
