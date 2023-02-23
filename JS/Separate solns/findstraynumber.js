// 7 Kyu | Find stray number

function stray(numbers) {
  let duplicate;

  if (numbers[0] == numbers[1]) {
    duplicate = numbers[0];
  } else if (numbers[0] !== numbers[1]) {
    if (numbers[0] == numbers[2]) {
      duplicate = numbers[0];
    } else {
      duplicate = numbers[1];
    }
  }

  return parseInt(numbers.filter((num) => num !== duplicate));
}
