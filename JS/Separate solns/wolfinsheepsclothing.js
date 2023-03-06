// 8 Kyu | A wolf in sheep's clothing

function warnTheSheep(queue) {
  danger = queue.length - queue.indexOf("wolf") - 1;
  if (queue[queue.length - 1] == "wolf") return "Pls go away and stop eating my sheep";
  else return `Oi! Sheep number ${danger}! You are about to be eaten by a wolf!`;
}
