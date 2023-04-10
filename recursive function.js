function searchArray(arr, value) {
    // Base case: if the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    // Recursive case: check if the first element is the value
    if (arr[0] === value) {
      return true;
    }
    // If the first element is not the value, remove it and search the rest of the array
    return searchArray(arr.slice(1), value);
  }
  let arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3)); // Output: true
  console.log(searchArray(arr, 6)); // Output: false  