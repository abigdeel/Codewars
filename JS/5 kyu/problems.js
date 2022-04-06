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

////