// 6 Kyu | Bouncing Balls

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  seen = Math.log(window / h) / Math.log(bounce);
  return seen == 1 ? 1 : Math.floor(seen) * 2 + 1;
}

(h = 2), (bounce = 0.5), (window = 1);

console.log(bouncingBall(h, bounce, window));
