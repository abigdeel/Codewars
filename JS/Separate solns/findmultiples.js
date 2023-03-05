// 8 Kyu | Find multiples of a number

function findMultiples(integer, limit) {
    let arr = [];
    for (i = integer; i <= limit; i += integer) {
      arr.push(i);
    }
    return arr;
  }
  