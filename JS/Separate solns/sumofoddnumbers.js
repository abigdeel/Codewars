// 7 Kyu | Sum of odd numbers

function rowSumOddNumbers(n) {
  sum = 0;
  for (i = n * (n - 1) + 1; i <= n * (n - 1) + 1 + 2 * (n - 1); i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;

  // Using series sum S = n/2(a + L)
  // Reduces to S = n^3
}

console.log(rowSumOddNumbers(42));
