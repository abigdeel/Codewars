// 7 Kyu | Converting Improper Fractions

function getMixedNum(fraction) {
  num = fraction.split("/")[0];
  den = fraction.split("/")[1];
  ans = Math.floor(num / den);
  return `${ans} ${num-ans*den}/${den}`
}

console.log(getMixedNum("75/10"));