// 7 kyu | Count the digit

function nbDig(n, d) {
    let arr = []
    let count = 0;
    for (i = 0; i <= n; i++) {
      arr[i] = i*i;
    }
    return arr.join("").split("").filter(num => num == d).length;
 }