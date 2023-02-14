function solution(number) {
  let arr = [];
  if (number <= 0) {
    return 0;
  }
  for (i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, init) => acc + init);
}

console.log(solution(10));
