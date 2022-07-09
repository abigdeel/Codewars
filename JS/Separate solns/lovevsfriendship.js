// 7 Kyu | Love vs friendship

function wordsToMarks(string) {
  return string.split("").reduce((acc, char) => acc + char.charCodeAt() - 96, 0);
}
