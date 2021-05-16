// Create the function and set a default value [] for the array
const canBeSplitted = (array = []) => {
  // Create the variables
  let canDivi = false;
  let sumLeft = 0;
  let sumRight = 0;

  // Go throught the array
  for (let i = 0; i < array.length; i++) {
    // Storage the sum of the left starting from the index 0 ann ending in the i
    sumLeft = array.slice(0, i).reduce((a, b) => a + b, 0);
    // Storage the sum of the right starting from the index i ann ending in the array length
    sumRight = array.slice(i, array.length).reduce((a, b) => a + b, 0);
    // If two sums match become true
    if (sumRight === sumLeft) {
      canDivi = true;
    }
  }
  // Return 1: Can be divided, -1: Can't be divided, 0: Empty array or the data type is not array:
  return array.length === 0 || !array ? 0 : canDivi ? 1 : -1;
};

// Make a little's tests
console.info(canBeSplitted([1, 3, 3, 8, 4, 3, 2, 3, 3]));
console.info(canBeSplitted([1, 3, 3, 3, 4]));
console.info(canBeSplitted([1, 3, 3, 4]));
console.info(canBeSplitted([]));
