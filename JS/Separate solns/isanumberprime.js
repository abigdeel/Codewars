// 6 Kyu | Is a number prime?

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

// sqrt floor to reduce number of checks
// then if any divisors found, return false
// other if number is greater than or equal 2, return true. must be prime.
