// 8 Kyu | Nth power

function index(array, n) {
  return n >= array.length ? -1 : array[n] ** n;
}
