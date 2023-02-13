// 7 Kyu | Shortest Word

function findShort(s) {
  return s.split(" ").reduce((min, word) => {
    if (word.length < min) min = word.length
    return min;
  }, s.split(" ")[0].length);
}
