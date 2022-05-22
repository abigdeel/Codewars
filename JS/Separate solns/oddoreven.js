// 7 Kyu | Odd or Even?

function oddOrEven(array) {
  if (array.length == 0) {
    return "even";
  } else {
    return Math.abs(array.reduce((sum, num) => sum + num)) % 2 == 1 ? "odd" : "even";
  }
}

console.log(oddOrEven([1, 2, 3, 4]));
console.log(oddOrEven([]));
