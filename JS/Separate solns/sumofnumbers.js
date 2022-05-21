// 7 Kyu | Beginner Series #3 - Sum of Numbers

function getSum(a, b) {
  sum = 0;
  if (a == b) {
    sum = a;
  } else {
    for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSum(1, 5));
console.log(getSum(6, -2));
