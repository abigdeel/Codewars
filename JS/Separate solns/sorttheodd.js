// 6 Kyu | Sort the odd

function sortArray(array) {
  if (array.length == 0) return array;
  oddArray = [];
  evenArray = [];

  array.forEach((num) => {
    if (Math.abs(num) % 2 == 1) oddArray.push(num);
  });
  oddArray.sort((a, b) => a - b);

  console.log(oddArray);

  count = 0;
  for (i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 == 1) {
      array[i] = oddArray[count];
      count++;
    }
  }
  return array;
}

console.log(sortArray([1, 9, 2, 6, 3, 12]));
