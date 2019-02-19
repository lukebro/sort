'use strict';

/**
 * Sort an array via bubble sort
 *
 * @param  {Array} arr - The array to be sorted.
 * @param  {Function} comparator - Determines how to compare values in the array.
 * @return {Array} - The sorted array.
 */
function bubbleSort(arr, comparator) {
  comparator =
    comparator == null
      ? function(a, b) {
          return a > b;
        }
      : comparator;
  arr = arr.slice(0);
  var n = arr.length;

  while (n != 0) {
    var k = 0;
    for (var i = 1; i < n; i++) {
      if (comparator(arr[i - 1], arr[i])) {
        var temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        k = i;
      }
    }
    n = k;
  }

  return arr;
}

module.exports = bubbleSort;
