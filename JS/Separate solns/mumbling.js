// 7 kyu | Mumbling

function accum(s) {
  return s.split("").map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join("-");
}

console.log(accum("abcd"));
