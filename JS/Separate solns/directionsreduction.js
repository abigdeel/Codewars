// 5 Kyu | Directions Reduction

function dirReduc(arr) {
  for (i = 0; i < arr.length; i++) {
    if (
      (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") ||
      (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") ||
      (arr[i] == "EAST" && arr[i + 1] == "WEST") ||
      (arr[i] == "WEST" && arr[i + 1] == "EAST")
    ) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}

path = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
console.log(dirReduc(path));
