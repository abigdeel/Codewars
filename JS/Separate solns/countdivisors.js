// 7 Kyu | Count the divisors of a number

function getDivisorsCnt(n) {
  let divisors = [];
  for (i = 1; i <= n; i++) {
    n % i !== 0 || divisors.push(i);
  }
  return divisors.length;
}
