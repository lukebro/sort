var test = require('tape')
var sorts = {
	insertion: require('../packages/sort-insertion'),
	bubble: require('../packages/sort-bubble'),
	selection: require('../packages/sort-selection'),
}

Object.keys(sorts).forEach(function (key) {
   var sort = sorts[key]

	test(key + ': sorts an array of numbers with comparator passed', function (t) {
		var arr = [6, 2, 5, 10, 23, 1, 0]
		t.deepEqual(sort(arr, function (a, b) { return a > b }), [0, 1, 2, 5, 6, 10, 23])

		t.end()
	})

	test(key + ': sorts an array of numbers without comparator passed', function (t) {
		var arr = [6, 2, 5, 10, 23, 1, 0]
		t.deepEqual(sort(arr), [0, 1, 2, 5, 6, 10, 23])

		t.end()
	})

	test(key + ': sorts an array of objects', function (t) {
		var arr = [{ value: 30 }, { value: 32 }, { value: 40 }, { value: 10 }]
		t.deepEqual(sort(arr, function (a, b) { return a.value > b.value }), [{ value: 10 }, { value: 30 }, { value: 32 }, { value: 40 }])

		t.end()
	})

	test(key + ': sorting an empty array returns an empty array', function (t) {
		var arr = []
		t.deepEqual(sort(arr), [])

		t.end()
	})

})
