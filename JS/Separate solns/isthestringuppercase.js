// 8 Kyu | Is the string uppercase

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};
