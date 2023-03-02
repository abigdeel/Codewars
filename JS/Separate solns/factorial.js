// 7 Kyu | Factorial

function factorial(n) {
  let f = n;
  for (i = n - 1; i > 0; i--) {
    f = f * i;
  }
  return n == 0 ? 1 : f;
}
