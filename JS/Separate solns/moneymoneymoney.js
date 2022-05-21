function calculateYears(principal, interest, tax, desired) {
  years = 0;
  if (principal == desired) {
    return years;
  } else {
    do {
      gain = principal * interest;
      loss = gain * tax;
      principal += gain - loss;
      years++;
    } while (principal < desired);
  }
  return years;
}

console.log(calculateYears(1000, 0.01625, 0.18, 1200));
