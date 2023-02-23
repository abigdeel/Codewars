// 8 Kyu | Are you playing banjo?

function areYouPlayingBanjo(name) {
  let ans = name[0].toLowerCase() === "r" ? "plays" : "does not play";
  return `${name} ${ans} banjo`;
}
