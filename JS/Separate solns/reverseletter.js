// 7 Kyu | Simple Fun: Reverse Letter

function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .filter((char) => char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
    .join("");
}
