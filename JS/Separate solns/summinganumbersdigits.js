// 7 Kyu | Summing a number's digits

function sumDigits(number) {
  arr = number.toString().split("");
  if (arr[0] == "-") {
    arr.shift(1);
  }
  arr = arr.map((char) => parseInt(char));
  return arr.reduce((acc, init) => {
    return acc + init;
  });
}

console.log(sumDigits(-344));
