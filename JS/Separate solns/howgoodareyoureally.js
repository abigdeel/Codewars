function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, init) => acc + init) / classPoints.length < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
