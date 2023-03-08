// 6 Kyu | Sum of Digits / Digital Root

function digitalRoot(n) {
  while (n.toString().length > 1) {
    n = n
      .toString()
      .split("")
      .reduce((acc, init) => Number(acc) + Number(init));
  }
  return n;
}
