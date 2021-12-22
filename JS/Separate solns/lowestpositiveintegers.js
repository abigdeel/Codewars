// 7 Kyu | Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 22, 11, 2]));
