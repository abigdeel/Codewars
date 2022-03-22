// 6 kyu | Your order, please

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

words = "Thi2s i5s 3a t7est se9ntence ok1ay";

////////////////////////////////////////////////////////////////////////////////////

// 4 kyu | Catching Car Mileage Numbers

function isInteresting(number, awesomePhrases) {
  function nowOrSoon(number, awesomePhrases) {
    // less than 100 --> 0;
    if (number < 100) {
      return 0;
    }

    // is an awesome num --> 1;
    if (awesomePhrases.find((match) => match == number)) {
      return 2;
    }

    // increasing check //////////////////////////
    for (i = 1; i < number.toString().length; i++) {
      if (
        parseInt(number.toString()[i]) == parseInt(number.toString()[i - 1]) + 1 &&
        i < number.toString().length - 1
      ) {
        continue;
      } else if (
        parseInt(number.toString()[i]) == parseInt(number.toString()[i - 1]) + 1 ||
        (parseInt(number.toString()[i]) == 0 &&
          parseInt(number.toString()[i - 1]) == 9 &&
          i == number.toString().length - 1)
      ) {
        return 2;
      } else {
        break;
      }
    }

    // decreasing check;
    for (i = 1; i < number.toString().length; i++) {
      if (parseInt(number.toString()[i]) !== parseInt(number.toString()[i - 1]) - 1) {
        break;
      } else if (i == number.toString().length - 1) {
        return 2;
      }
    }

    // x0000 check
    if (number.toString().slice(1) == 0) {
      return 2;
    }

    // palindrome check
    if (number.toString() == number.toString().split("").reverse().join("")) {
      return 2;
    }

    return 0;
  }

  if (nowOrSoon(number, awesomePhrases) == 2) {
    return 2;
  } else {
    return nowOrSoon(number + 1, awesomePhrases) == 2 ? 1 : nowOrSoon(number + 2, awesomePhrases) == 2 ? 1 : 0;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
