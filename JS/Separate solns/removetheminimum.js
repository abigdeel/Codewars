// 7 Kyu | Remove the minimum

function removeSmallest(numbers) {
  if (numbers.length == 0) {
    return numbers;
  } else {
    min = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, min).concat(numbers.slice(min + 1));
  }
}

console.log(removeSmallest([7, 2, 4, 1, 5]));
console.log(removeSmallest([]));
