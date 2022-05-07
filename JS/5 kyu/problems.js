//// Heap sort fun, slow with huge strings though

function middlePermutation(s) {
  hArr = Array(s.length).fill(0);
  sPermute = [s];
  i = 0;
  num = 1;
  sArr = s.split("");
  while (i < s.length) {
    if (hArr[i] < i) {
      if (i % 2 == 0) {
        sTemp = sArr[0];
        sArr[0] = sArr[i];
        sArr[i] = sTemp;
      } else {
        sTemp = sArr[hArr[i]];
        sArr[hArr[i]] = sArr[i];
        sArr[i] = sTemp;
      }
      sPermute[num] = sArr.join("");
      num++;
      hArr[i]++;
      i = 0;
    } else {
      hArr[i] = 0;
      i++;
    }
  }
  // sPermute holds all permutations, not sorted
}

//// 6 kyu | extract file name

function extractFileName(dirtyFileName) {
  return dirtyFileName
    .split("_")
    .filter((piece, index) => index > 0)
    .join("_")
    .split(".")
    .reverse()
    .filter((piece, index) => index > 0)
    .reverse()
    .join(".");
}

//alternatively

function getFileName(filename) {
  return filename.slice(filename.indexOf("_") + 1, filename.lastIndexOf("."));
}

//////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Meeting

function meeting(s) {
  return (
    "(" +
    s
      .toUpperCase()
      .split(";")
      .map((fulln) => {
        return fulln.split(":").reverse().join(", ");
      })
      .sort()
      .join(")(") +
    ")"
  );
}

//////////////////////////////////////////////////////////////////////////

//// 5 kyu | Play with two Strings

function workOnStrings(a, b) {
  objA = {};
  objB = {};

  a.toLowerCase()
    .split("")
    .forEach((char) => {
      objA[char] ? delete objA[char] : (objA[char] = 1);
    });
  b.toLowerCase()
    .split("")
    .forEach((char) => {
      objB[char] ? delete objB[char] : (objB[char] = 1);
    });
  a = a.split("").map((char) => {
    return objB[char.toLowerCase()] ? (char.charCodeAt() > 90 ? char.toUpperCase() : char.toLowerCase()) : char;
  });
  b = b.split("").map((char) => {
    return objA[char.toLowerCase()] ? (char.charCodeAt() > 90 ? char.toUpperCase() : char.toLowerCase()) : char;
  });

  return a.join("") + b.join("");
}

///////////////////////////////////////////////////////////////////////

//// 5 kyu | 80's Kids #6: Rock 'Em, Sock 'Em Robots

function fight(robot1, robot2, tactics) {
  turn = 0;
  robot1.speed >= robot2.speed ? (first = robot1) : (first = robot2);
  first == robot1 ? (second = robot2) : (second = robot1);

  while (turn <= Math.max(robot1.tactics.length, robot2.tactics.length)) {
    if (turn < first.tactics.length) {
      second.health -= tactics[first.tactics[turn]];
    }
    if (second.health <= 0) {
      break;
    }
    if (turn < second.tactics.length) {
      first.health -= tactics[second.tactics[turn]];
    }
    if (first.health <= 0) {
      break;
    }
    turn++;
  }

  if (robot1.health > robot2.health) {
    return robot1.name + " has won the fight.";
  } else if (robot1.health < robot2.health) {
    return robot2.name + " has won the fight.";
  } else {
    return "The fight was a draw.";
  }
}

robot1 = { name: "Rocky", health: 100, speed: 20, tactics: ["missile", "missile", "missile", "missile"] };
robot2 = { name: "Missile Bob", health: 100, speed: 21, tactics: ["missile", "punch", "missile", "missile"] };
tactics = { punch: 20, laser: 30, missile: 35 };

///////////////////////////////////////////////////////////////////////

//// 5 kyu | Battle ships: Sunk damaged or not touched?

function damagedOrSunk(board, attacks) {
  boats = {};
  score = {
    sunk: 0,
    damaged: 0,
    notTouched: 0,
  };
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        boats[board[i][j]] ? boats[board[i][j]].push([i, j]) : (boats[board[i][j]] = [[i, j]]);
      }
    }
  }

  score.notTouched = Object.keys(boats).length;
  Object.keys(boats).forEach((key) => {
    boats[`${key}size`] = boats[key].length;
  });

  for (i = 0; i < attacks.length; i++) {
    xb = attacks[i][0] - 1;
    yb = board.length - attacks[i][1];
    pos = board[yb][xb];

    if (pos > 0) {
      if (boats[pos].length == boats[`${pos}size`]) {
        score.notTouched--;
        score.damaged++;
      }
      if (boats[pos].length == 1) {
        delete boats[pos];
        score.damaged--;
        score.sunk++;
      } else {
        boats[pos].pop();
      }
    }
    board[yb][xb] = 0;
  }

  score.points = score.damaged * 0.5 + score.sunk - score.notTouched;
  return score;
}

////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Find the Parity Outlier

function findOutlier(integers) {
  mod = [];
  integers.slice(0, 3).forEach((int, index) => (mod[index] = Math.abs(int) % 2));

  if (mod[0] == mod[2] && mod[0] != mod[1]) {
    return integers[1];
  } else if (mod[1] == mod[2] && mod[0] != mod[1]) {
    return integers[0];
  } else {
    for (i = 2; i < integers.length; i++) {
      if (Math.abs(integers[i]) % 2 != mod[0]) {
        return integers[i];
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Persistent Bugger

function persistence(num) {
  if (num < 10) {
    return 0;
  }
  count = 0;
  do {
    num = num
      .toString()
      .split("")
      .reduce((prod, digit) => prod * digit);
    count++;
  } while (num.toString().length > 1);
  return count;
}

////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Unique in Order

var uniqueInOrder = function (iterable) {
  iterable = !Array.isArray(iterable) ? iterable.split("") : iterable;
  return iterable.filter((char, index, array) => {
    return index == 0 || char !== array[index - 1];
  });
};

////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Consecutive strings

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return "";
  }
  startPos = 0;
  for (i = 1; i < strarr.length; i++) {
    if (strarr.slice(i, i + k).join("").length > strarr.slice(startPos, startPos + k).join("").length) {
      startPos = i;
    }
  }

  return strarr.slice(startPos, startPos + k).join("");
}

/////////////////////////////////////////////////////////////////////////////

//// 4 kyu | Nesting Structure Comparison

Array.prototype.sameStructureAs = function (other) {
  if (arr.length != other.length) {
    return false;
  } else {
    for (i = 0; i < other.length; i++) {
      if (this[i].length != other[i].length) {
        return false;
      }
    }
  }

  return true;
};

// arr = [1, 1, [2, 2], 1];
// test = [3, 3, [5, 5], 2];
// console.log(test.sameStructureAs(arr));

//////////////////////////////////////////////////////////

//// 4 kyu | Simple Fun #159: Middle Permutation

function middlePermutation(s) {
  sArr = s.split("").sort();
  sMid = [];

  if (s.length % 2 == 0) {
    sMid[0] = sArr[s.length / 2 - 1];
    sArr.splice(s.length / 2 - 1, 1);
    sMid += sArr.reverse().join("");
  } else {
    sMid = sArr
      .slice((s.length - 1) / 2 - 1, (s.length - 1) / 2 + 1)
      .reverse()
      .join("");
    sArr.splice((s.length - 1) / 2 - 1, 2);
    sMid += sArr.reverse().join("");
  }

  return sMid;
}

// s = "12345";
// console.log(middlePermutation(s));

/////////////////////////////////////////////////////////////////////////

//// 3 kyu | Rail Fence Cipher: Encoding and Decoding

function encodeRailFenceCipher(string, numberRails) {
  numberRails--;
  strNum = 0;
  railNum = 0;
  rails = {};

  while (strNum < string.length) {
    !rails[`${Math.abs(railNum)}`]
      ? (rails[`${Math.abs(railNum)}`] = string[strNum])
      : (rails[`${Math.abs(railNum)}`] += string[strNum]);
    strNum++;
    if (Math.abs(railNum) == numberRails) {
      railNum = -railNum;
      railNum++;
    } else {
      railNum++;
    }
  }
  return Object.values(rails).join("");
}

function decodeRailFenceCipher(string, numberRails) {
  let decoded = string.split("");
  numberRails--;
  strNum = 0;
  railNum = 0;
  travel = 0;
  railCount = 0;

  for (i = 0; i < string.length; i++) {
    pos = travel * numberRails + railCount;
    decoded[pos] = string[strNum];
    strNum++;

    if (railNum == 0 || railNum % numberRails == 0) {
      travel += 2;
      if (pos + numberRails * 2 > string.length) {
        travel = 0;
        railNum++;
      }
    } else {
      travel++;
      if (pos + numberRails * 2 - railCount * 2 >= string.length) {
        travel = 0;
        railNum++;
        if (railNum == numberRails) {
          travel = 1;
        }
      }
    }

    if (travel % 2 == 0) {
      railCount = railNum;
    } else {
      railCount = numberRails - railNum;
    }
  }
  decoded = decoded.join("");
  return decoded;
}

// string = "0123456789abc";
// jumble = encodeRailFenceCipher(string, 4);
// string = decodeRailFenceCipher(jumble, 4);

/////////////////////////////////////////////////////////////////////////

//// 4 kyu | 4 By $ Skyscrapers

////////////////////////////////////////////////////////////////////

//// 5 Kyu | Valid Parentheses

function validParentheses(parens) {
  count = 0;
  for (i = 0; i < parens.length; i++) {
    parens[i] == "(" ? count++ : parens[i] == ")" ? count-- : count;
    if (count < 0) {
      break;
    }
  }
  if (count == 0) {
    return true;
  }
  return false;
}

///////////////////////////////////////////////////////////////////////
