module.exports = function reverse (n) {
  n = Math.abs(n);
  let reversedNumber = '';

  while (n > 0) {
    reversedNumber += n % 10;
    n = Math.floor(n / 10);
  }
  
  return reversedNumber;
}
