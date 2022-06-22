// 6 Kyu | Tortoise Racing

function race(v1, v2, g) {
  if (v1 >= v2) return null;
  timeHours = g / (v2 - v1);
  hours = Math.floor(timeHours);
  minutes = Math.floor((timeHours - hours) * 60.00000001);
  seconds = Math.floor((timeHours * 3600) % 60);
  return [hours, minutes, seconds];
}
