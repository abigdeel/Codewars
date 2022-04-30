// 8 Kyu | Remove first and last character

function removeChar(str) {
  return str
    .split("")
    .slice(1, str.length - 1)
    .join("");
}
