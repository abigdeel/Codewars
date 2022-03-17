// 7 kyu |

function nbYear(p0, percent, aug, p) {
  for (i = 0; p > p0; i++) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
  }
  return i;
}

///////////////////////////////////////////////////////////////////////

// 5 kyu | Maximum subarray unit

var maxSequence = function (arr) {
  let currentmax = 0;
  let pos = 0;
  let neg = 0;
  let finalmax = 0;

  for (i = 1; i <= arr.length; i++) {
    i--;
    while (i < arr.length && arr[i] >= 0) {
      pos += arr[i];
      i++;
    }

    while (i < arr.length && arr[i] < 0) {
      neg += arr[i];
      i++;
    }

    if (pos + neg >= 0) {
      currentmax += pos + neg;
      pos = pos + neg;
    } else if (currentmax + neg < 0) {
      currentmax += pos;
      pos = 0;
      finalmax = currentmax > finalmax ? currentmax : finalmax;
      currentmax = 0;
    }


    neg = 0;
  }
  return finalmax;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// i = 0;
// arra = [];
// while (i < arra.length) {
//   console.log(arra[i]);
//   i++;
// }
