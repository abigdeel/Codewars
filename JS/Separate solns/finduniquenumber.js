// 6 kyu | Find the unique number
function findUniq(arr) {
  if (arr[0] == arr[1]) {
    rep = arr[0];
  } else {
    if (arr[0] == arr[2]) {
      return arr[1];
    } else {
      return arr[0];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== rep) {
      return arr[i];
    }
  }
}

console.log(findUniq([1, 2, 2]));
