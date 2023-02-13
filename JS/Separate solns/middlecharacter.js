// 7 Kyu | Get the Middle Character

function getMiddle(s) {
  if (s.length == 0) return "";
  else if (s.length % 2 == 1) return s[(s.length + 1) / 2 - 1];
  else if (s.length % 2 == 0) return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
