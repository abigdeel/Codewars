const sequenceSum = (begin, end, step) => {
  sum = 0;
  for (i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
