function printerError(s) {
  errs = 0;
  for (i = 0; i < s.length; i++) {
    (s[i] >= "a" && s[i] <= "m") || errs++;
  }
  return `${errs}/${s.length}`;
}

str = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(str));
