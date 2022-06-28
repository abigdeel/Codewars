// 8 Kyu | Alternating Case

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join("");
};
