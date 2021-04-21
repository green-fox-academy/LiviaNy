// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumDigits(n: number): number {
  if (n === 0) {
    return 0;
  } else {
    return (n % 10) + sumDigits(Math.floor(n / 10));
  }
}

console.log(sumDigits(3456));
