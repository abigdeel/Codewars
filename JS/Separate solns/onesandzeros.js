// 7 Kyu || Ones and Zeros

const binaryArrayToNumber = (arr) => {
  return arr.reduce((total, digit, index) => {
    return digit == 1 ? total + Math.pow(2, arr.length - 1 - index) : total;
  }, 0);
};
