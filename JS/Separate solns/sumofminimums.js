// 7 Kyu | Sum of minimums

function sumOfMinimums(arr) {
  let min = [];
  for (i = 0; i < arr.length; i++) {
    min.push(Math.min(...arr[i]));
  }
  return min.reduce((acc, num) => acc + num);
}
