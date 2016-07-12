var test = require('tape')
var sort = require('../../packages/sort-insertion')

test('sorts an array of numbers with comparator passed', function (t) {
	t.plan(1)
	var arr = [6, 2, 5, 10, 23, 1, 0]
	t.deepEqual(sort(arr, function (a, b) { return a > b }), [0, 1, 2, 5, 6, 10, 23])
	t.end()
})

test('sorts an array of numbers without comparator passed', function (t) {
	t.plan(1)
	var arr = [6, 2, 5, 10, 23, 1, 0]
	t.deepEqual(sort(arr), [0, 1, 2, 5, 6, 10, 23])
	t.end()
})

test('sorts a array of objects', function (t) {
	t.plan(1)
	var arr = [{ value: 30 }, { value: 32 }, { value: 40 }, { value: 10 }]
	t.deepEqual(sort(arr, function (a, b) { return a.value > b.value }), [{ value: 10 }, { value: 30 }, { value: 32 }, { value: 40 }])
	t.end()
})

test('sorting empty array returns an empty array', function (t) {
	t.plan(1)
	var arr = []
	t.deepEqual(sort(arr), [])
	t.end()
})
