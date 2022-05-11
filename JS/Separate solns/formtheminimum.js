// 7 Kyu | Form the minimum

function minValue(values) {
  return parseInt([...new Set(values)].sort().join(""));
}
