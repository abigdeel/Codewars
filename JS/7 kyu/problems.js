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

  let finalmax = 0;
  let i = 0;

  while (i < arr.length) {
    pos = 0;
    while (i < arr.length && arr[i] >= 0) {
      pos += arr[i];
      i++;
    }
    currentmax += pos;

    neg = 0;
    while (i < arr.length && arr[i] < 0) {
      neg += arr[i];
      i++;
    }

    finalmax = currentmax > finalmax ? currentmax : finalmax;
    if (currentmax + neg < 0) {
      currentmax = 0;
    } else {
      currentmax += neg;
    }
  }

  return finalmax;
};

/////////////////////////////////////////////////////////////////////

// 6 kyu | Tribonacci Sequence

function tribonacci(signature, n) {
  if (n == 0) {
    return [];
  } else {
    for (i = 3; i < n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
    }
  }

  return signature.slice(0, n);
}

//////////////////////////////////////////////////////////////////////

// 6 kyu | Find the missing letter

function findMissingLetter(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i + 1].charCodeAt(0) - 1 > array[i].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}

//////////////////////////////////////////////////////////////////////

// 6 kyu | The Supermarket Queue

function queueTime(customers, n) {
  total = 0;
  pos = 0;
  tills = 0;
  count = 0;

  if (customers.length == 0) {
    return 0;
  }

  while (count !== customers.length) {
    if (customers[pos] > 0) {
      if (tills == 0) {
        total++;
      }
      customers[pos]--;
      pos++;
      tills++;
    } else if (customers[pos] <= 0) {
      count++;
      pos++;
    }

    if (count == customers.length) {
      return total;
    }

    if (tills == n || (n >= customers.length && tills == customers.length) || pos == customers.length) {
      pos = 0;
      tills = 0;
      count = 0;
    }
  }
}

queueTime([2, 1, 4, 2, 5, 7], 2);
