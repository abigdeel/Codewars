// 8 Kyu | Remove Exclamation Marks

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((char) => char !== "!")
    .join("");
}
