// 6 Kyu | Detect Pangram

function isPangram(string) {
  let alphabet = {};
  string
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 && !alphabet[char]) alphabet[char] = char;
    });

  return Object.keys(alphabet).length == 26 ? true : false;
}

str = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(str));
