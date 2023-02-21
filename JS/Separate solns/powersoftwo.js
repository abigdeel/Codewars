// 8 Kyu | Powers of Two

function powersOfTwo(n) {
  let ans = [];
  for (i = 0; i <= n; i++) {
    ans.push(2 ** i);
  }
  return ans;
}
