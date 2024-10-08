function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0 ) return null;
  return a / b;
}

function average(...numbers) {
  let lenghtNumbers = numbers.length;
  let sumNumbers = 0;
  let averageResult = 0;

  for(let num of numbers) {
    // Handling the wrong type of num
    if(typeof num !== "number") {
      lenghtNumbers--;
      continue;
    }
    sumNumbers += num;
  }
  averageResult = sumNumbers / lenghtNumbers;

  return averageResult;
}

module.exports = {
  sum,
  multiply,
  divide,
  average
};
