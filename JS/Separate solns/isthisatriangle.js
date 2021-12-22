// 7 Kyu | Is this a triangle?

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? true : false;
}

console.log(isTriangle(7, 2, 2));
