/**
 * Sort an array via insertion
 * 
 * @param  {Array} arr - The array to be sorted.
 * @param  {Function} comparator - Determines how to compare values in the array.
 * @return {Array} - The sorted array.
 */
function insertionSort(arr, comparator) {
	comparator = comparator == null ? function (a, b) { return a > b } : comparator
	for (var i = 1; i < arr.length; i++) {
		var j = i
		while (j > 0 && comparator(arr[j - 1], arr[j])) {
			var temp = arr[j]
			arr[j] = arr[j - 1]
			arr[j - 1] = temp
			j = j - 1
		}
	}

	return arr
}

module.exports = insertionSort
