// 6 Kyu | Break camelCase

function solution(string) {
  for (i = 1; i < string.length; i++) {
    if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90 && string[i - 1] !== " ") {
      string = string.slice(0, i) + " " + string.slice(i, string.length);
    }
  }
  return string;
}

str = "testing out theCamel To See How Well caseBreakerUpper";
console.log(solution(str));
