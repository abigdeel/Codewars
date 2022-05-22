// 7 Kyu | Number of People in the Bus
let number = function (busStops) {
  return busStops.reduce((total, [on, off]) => total + on - off, 0);
};

console.log(number);
