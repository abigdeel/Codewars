// 6 Kyu | Equal Sides of an Array

function findEvenIndex(arr) {
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      left = 0;
    } else {
      left = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
    }
    console.log("left: ", left);
    if (i == arr.length - 1) {
      right = 0;
    } else {
      right = arr.slice(i + 1, arr.length).reduce((sum, num) => sum + num, 0);
    }
    console.log("right: ", right);
    if (left == right) {
      return i;
    } else if (i == arr.length - 1) {
      return -1;
    }
  }
}

arr = [1, 2, 3, 4, 3, 2, 1];
console.log(findEvenIndex(arr));
