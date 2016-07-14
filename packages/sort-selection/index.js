/**
 * Sort an array via selection sort
 * 
 * @param  {Array} arr - The array to be sorted.
 * @param  {Function} comparator - Determines how to compare values in the array.
 * @return {Array} - The sorted array.
 */
function selectionSort(arr, comparator) {
	comparator = comparator == null ? function (a, b) { return a > b } : comparator
	arr = arr.slice(0)
	
	for (var j = 0; j < arr.length - 1; j++) {
		var min = j

		for (var i = j + 1; i < arr.length; i++) {
			if (comparator(arr[min], arr[i])) {
            	min = i
        	}
		}

		if (min != j) {
			var temp = arr[j]
			arr[j] = arr[min]
			arr[min] = temp
    	}
	}

	return arr
}

module.exports = selectionSort
