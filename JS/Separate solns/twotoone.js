// 7 Kyu | Two to One

function longest(s1, s2) {
  str = (s1 + s2).split("").sort();

  str = str.filter((char, index) => {
    return str.indexOf(char) === index;
  });

  return str.join("");
}

a = "aretheyhere";
b = "yestheyarehere";

console.log(longest(a, b));
