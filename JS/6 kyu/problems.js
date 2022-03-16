function narcissistic(value) {
  let sum = 0;
  for (i = 0; i < value.toString().length; i++) {
    sum += Math.pow(value.toString()[i], value.toString().length);
  }
  return value == sum ? true : false;
}

/////////////////////////////////////////////////////////////////////

function isValidWalk(walk) {
  let atHome = [0, 0];
  for (i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      atHome[0]++;
    } else if (walk[i] == "s") {
      atHome[0]--;
    } else if (walk[i] == "e") {
      atHome[1]++;
    } else if (walk[i] == "w") {
      atHome[1]--;
    }
  }
  return walk.length == 10 && atHome[0] == 0 && atHome[1] == 0 ? true : false;
}

console.log(isValidWalk("neswneswns"));
