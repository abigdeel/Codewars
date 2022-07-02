// 6 Kyu | Encrypt this!

var encryptThis = function (text) {
  text = text.split(" ");
  text = text.map((word) => {
    if (word.length == 1) return word.charCodeAt();
    else if (word.length == 2) return `${word[0].charCodeAt()}${word[1]}`;
    else {
      temp = word[1];
      temp2 = word[word.length - 1];
      return `${word[0].charCodeAt()}${temp2}${word.slice(2, word.length - 1)}${temp}`;
    }
  });
  text = text.join(" ");
  return text;
};
