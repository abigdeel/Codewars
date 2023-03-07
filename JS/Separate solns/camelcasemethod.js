// 6 Kyu | Camel Case Method

String.prototype.camelCase = function () {
  if (this == "") return "";
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};
