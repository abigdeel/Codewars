// 6 Kyu | Tower Builder

function towerBuilder(nFloors) {
  let tower = [];
  total = 2 * nFloors - 1;
  for (i = 0; i < nFloors; i++) {
    stars = 2 * (i + 1) - 1;
    blanks = (total - stars) / 2;
    tower[i] = `${" ".repeat(blanks)}${"*".repeat(stars)}${" ".repeat(blanks)}`;
  }
  return tower;
}

console.log(towerBuilder(5));
