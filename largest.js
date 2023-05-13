function findLargestNumber(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array');
    }
  
    if (numbers.length === 0) {
      throw new Error('Input array cannot be empty');
    }
  
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
  
    return largestNumber;
  }
  module.exports = findLargestNumber