// 7 Kyu | Don't give me five

function dontGiveMeFive(start, end) {
  let count = 0;
  for (i = start; i <= end; i++) {
    if (!i.toString().match("5")) count++;
  }
  return count;
}
