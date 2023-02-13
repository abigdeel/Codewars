function findAverage(array) {
  let sum = 0;
  return array.reduce((sum, num) => sum + num) / array.length;
}

console.log(findAverage([1, 2, 3, 4]));
