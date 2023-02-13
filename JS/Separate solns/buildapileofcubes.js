// 6 Kyu | Build a pile of Cubes

function findNb(m) {
  let vol = 0;
  let i = 0;
  while (vol < m) {
    i++;
    vol += Math.pow(i, 3);
    if (vol == m) return i;
  }
  return -1;
}

console.log(findNb(1071225));
