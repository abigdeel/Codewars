// 7 Kyu | To jaden case!

String.prototype.toJadenCase = function (str) {
  return this.split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
