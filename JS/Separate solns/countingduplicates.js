// 6 Kyu | Counting duplicates

function duplicateCount(text) {
  text = text.toLowerCase().split("");
  let chars = {};
  let dups = 0;
  for (i = 0; i < text.length; i++) {
    if (!chars[text[i]]) chars[text[i]] = 1;
    else chars[text[i]]++;
  }

  for (const nums in chars) {
    if (chars[nums] !== 1) dups++;
  }
  return dups;
}

console.log(duplicateCount("Indivisibilities"));
