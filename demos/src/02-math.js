function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function average(...numbers) {
  const validNumbers = numbers.filter((num) => typeof num === 'number');
  const sumNumbers = validNumbers.reduce((acc, num) => acc + num, 0);
  const averageResult = sumNumbers / validNumbers.length;

  return averageResult;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
