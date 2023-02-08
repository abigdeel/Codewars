// 6 Kyu | Duplicate Encoder

function duplicateEncode(word) {
    wordFilt = [];
  word = word.toLowerCase().split("");
  for (i = 0; i < word.length; i++) {
    wordFilt[i] = word.filter((char) => char == word[i]);
  }
  for (i = 0; i < word.length; i++) {
    if (wordFilt[i].length > 1) {
      word[i] = ")";
    } else {
      word[i] = "(";
    }
  }
  return word.join("");
}

console.log(duplicateEncode("receders"));
