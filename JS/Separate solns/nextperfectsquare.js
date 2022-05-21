function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) == false) {
    return -1;
  } else {
    do {
      sq++;
    } while (Number.isInteger(Math.sqrt(sq)) == false);
    return sq;
  }
}

console.log(findNextSquare(16));
