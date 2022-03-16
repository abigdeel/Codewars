function narcissistic(value) {
  let sum = 0;
  for (i = 0; i < value.toString().length; i++) {
    sum += Math.pow(value.toString()[i], value.toString().length);
  }
  return value == sum ? true : false;
}
