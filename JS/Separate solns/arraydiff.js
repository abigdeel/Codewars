// 6 Kyu | Array.diff

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
