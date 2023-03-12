function sumNoDuplicates(numbers) {
  // Create an empty object to store the count of each number
  const counts = {};

  // Loop through the numbers and increment the count for each one
  numbers.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1;
  });

  // Filter out any numbers that have a count greater than 1
  const uniqueNumbers = Object.keys(counts).filter((number) => {
    return counts[number] === 1;
  });

  // Sum up the unique numbers
  const sum = uniqueNumbers.reduce((total, number) => {
    return total + parseInt(number);
  }, 0);

  return sum;
}
