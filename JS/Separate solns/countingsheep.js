// 8 Kyu | Counting sheep...

function countSheeps(arrayOfSheep) {
  count = arrayOfSheep.length;
  arrayOfSheep.forEach((sheep) => sheep == true || count--);
  return count;
}

array = [true, true, true, false, false, true, true, false, true, false];
console.log(countSheeps(array));
