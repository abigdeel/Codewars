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

/////////////////////////////////////////////////////////////////////////////////////////////

// 5 kyu | Scramblies

// function scramble(str1, str2) {
//   if (str2.length > str1.length) {
//     return false;
//   } else {
//     for (i = 0; i < str2.length; i++) {
//       if (str1.indexOf(str2[i]) < 0) {
//         return false;
//       } else {
//         if (i == str2.length - 1) {
//           return true;
//         }
//         str1 = str1.slice(0, str1.indexOf(str2[i])) + str1.slice(str1.indexOf(str2[i]) + 1, str1.length);
//       }
//     }
//   }
// }

// Solution above is O(n^2). For loop and indexOf is O(n)
// Below solution is O(n). reduce() is O(n) and nothing is nested.


function scramble(str1, str2) {
  letterbank = str1.split("").reduce((count, letter) => {
    if (!count[letter]) {
      count[letter] = 0;
    }
    count[letter]++;
    return count;
  }, {});

  for (i = 0; i < str2.length; i++) {
    if (!letterbank[str2[i]] || letterbank[str2[i]] == 0) {
      return false;
    } else if (i == str2.length - 1) {
      return true;
    }
    letterbank[str2[i]]--;
  }
}

console.log(scramble("asdlkjtevaflkbvsgtgbafinaagasd", "testing"));
