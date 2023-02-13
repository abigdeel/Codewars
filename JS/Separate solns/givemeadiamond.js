function diamond(n) {
  let diam = "";
  if (n <= 0 || n % 2 == 0) return null;
  else if (n == 1) return "*\n";

  for (i = 1; i <= n; i++) {
    i <= Math.round(n / 2) ? (stars = i * 2 - 1) : (stars = (n - i) * 2 + 1);
    spaces = (n - stars) / 2;
    diam += " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces) + "\n";
  }

  return diam
    .split("\n")
    .map((line) => line.replace(/\s+$/, ""))
    .join("\n");
}

console.log(diamond(5));
