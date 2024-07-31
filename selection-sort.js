// selection sort out-of-place
// do not modify the original array

function selectionSort(arr) {
  // copy the original array
  let unsorted = arr.slice();
  let sorted = [];

  // while the array is not empty...
  while (unsorted.length > 0) {
    // do not move this console.log
    console.log(sorted.join(","));

    // find the index of the minimum value in the unsorted half
    let minIndex = 0;
    for (let i = 1; i < unsorted.length; i++) {
      if (unsorted[i] < unsorted[minIndex]) {
        minIndex = i;
      }
    }

    // save and remove the value at the min index
    let minValue = unsorted.splice(minIndex, 1)[0];

    // add the min value to the end of the sorted array
    sorted.push(minValue);
  }

  return sorted;
}


// In-place Selection Sort
// Mutates the original array
function selectionSortInPlace(arr) {
  // Set a pointer at zero dividing the array into sorted and unsorted halves
  for (let i = 0; i < arr.length; i++) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted half
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
