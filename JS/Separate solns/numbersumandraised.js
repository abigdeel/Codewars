// 6 Kyu | Take a Number and Sum its Digits Raised to the Consecutive Powers

function sumDigPow(a, b) {
  let soln = [];
  for (i = a; i <= b; i++) {
    if (
      i ==
      i
        .toString()
        .split("")
        .reduce((sum, digit, index) => sum + Math.pow(digit, index + 1), 0)
    ) {
      soln.push(i);
    }
  }
  return soln;
}

console.log(sumDigPow(80, 140));