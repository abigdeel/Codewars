// 7 Kyu | Categorize New Member

function openOrSenior(data) {
  return (output = data.map((pair) => (pair[0] >= 55 && pair[1] > 7 ? "Senior" : "Open")));
}

input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
console.log(openOrSenior(input));
