// 6 Kyu | Highest Scoring Word

function high(x) {
  x.split(" ").reduce((biggest, word, index) => {
    value = word.split("").reduce((total, char) => total + char.charCodeAt(0) - 96, 0);
    if (value > biggest) {
      maxPos = index;
      return value;
    } else {
      return biggest;
    }
  }, 0);
  return x.split(" ")[maxPos];
}

str = "what time are we climbing up the volcano";
console.log(high(str));
