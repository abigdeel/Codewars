function mxdiflg(a1, a2) {
  l1max = a1.reduce((a, b) => (a.length > b.length ? a : b)).length;
  l1min = a1.reduce((a, b) => (a.length < b.length ? a : b)).length;
  l2max = a2.reduce((a, b) => (a.length > b.length ? a : b)).length;
  l2min = a2.reduce((a, b) => (a.length > b.length ? a : b)).length;

  opt1 = Math.abs(l1max - l2min);
  opt2 = Math.abs(l2max - l1min);
  opt3 = Math.abs(l1max - l1min);
  opt4 = Math.abs(l2max - l2min);

  return Math.max(opt1, opt2, opt3, opt4);
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2));
