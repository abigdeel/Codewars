// 8 Kyu | Reduce but grow

function grow(x) {
  return x.reduce((acc, init) => acc * init, 1);
}
