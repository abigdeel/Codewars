// 7 Kyu | Sum of the first nth terms of series

function SeriesSum(n) {
  let ans = 0;

  for (i = 0; i < n; i++) {
    ans += 1 / (3 * i + 1);
  }

  return ans.toFixed(2);
}
