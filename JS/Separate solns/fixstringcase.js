// 7 Kyu | Fix string case

function solve(s) {
  let lower = 0;
  let upper = 0;
  s.split("").forEach((char) => {
    char.charCodeAt() >= 97 ? lower++ : upper++;
  });
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}

console.log(solve("testING"));
