//// 6 kyu | Your order, please

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

words = "Thi2s i5s 3a t7est se9ntence ok1ay";

////////////////////////////////////////////////////////////////////////////////////

//// 4 kyu | Catching Car Mileage Numbers

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

//// 5 kyu | Scramblies

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

/////////////////////////////////////////////////////////////////////

//// 6 kyu | Write Number in Expanded Form

function expandedForm(num) {
  let expanded = "";
  let numStr = num.toString();

  if (num < 11) {
    return numStr;
  }

  for (i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] == "0") {
      continue;
    } else {
      expanded = ((parseInt(numStr[i]) * Math.pow(10, numStr.length - i - 1)).toString() + " + ").concat(expanded);
    }
  }
  expanded = expanded.slice(0, expanded.length - 3);
  return expanded;
}

////////////////////////////////////////////////////////////////////

//// 4 kyu | Range Extraction

function solution(list) {}

////////////////////////////////////////////////////////////////////

//// 6 kyu | Who likes it?

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

///////////////////////////////////////////////////////////////////

//// 6 kyu | Mexican Wave

function wave(str) {
  strWavy = [];
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
      strWavy[count] = str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1, str.length);
      count++;
    }
  }
  return strWavy;
}

///////////////////////////////////////////////////////////////////

//// 6 kyu | Reverse every other word in the string

function reverse(str) {
  return str
    .split(" ")
    .map((word, index) => (index % 2 == 0 ? word : word.split("").reverse().join("")))
    .join(" ")
    .trim();
}
reverse("Testing this string, I am.");

///////////////////////////////////////////////////////////////////

//// 6 kyu | Count characters in your string

function count(string) {
  alphaCount = {};
  string.split("").map((char) => {
    alphaCount[char] = alphaCount[char] + 1 || 1;
  });
  return alphaCount;
}

//////////////////////////////////////////////////////////////////

//// 6 kyu | Delete occurrences of an element more than n times

function deleteNth(arr, n) {
  elementCount = {};
  filteredNth = [];
  arr.forEach((num) => {
    elementCount[num] = elementCount[num] + 1 || 1;
    if (elementCount[num] <= n) {
      filteredNth.push(num);
    }
  });
  return filteredNth;
}

console.log(deleteNth([1, 2, 5, 7, 1, 1, 2, 1, 2, 3, 1], 1));
