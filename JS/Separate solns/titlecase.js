// 6 Kyu | Title Case

function titleCase(title, minorWords) {
  words = title.split(" ");
  if (minorWords === undefined) {
    minorWords = [" "];
  } else {
    minorWords = minorWords.split(" ").map((min) => min.toLowerCase());
  }
  if (title === undefined || title === "") {
    return "";
  }
  return words
    .map((word, index) => {
      if (index == 0 || minorWords.includes(word.toLowerCase()) == false) {
        return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
      } else {
        return word.toLowerCase();
      }
    })
    .join(" ");
}

console.log(titleCase("the quick brown of the fox", "a an the of"));
