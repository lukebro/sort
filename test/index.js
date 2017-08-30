import test from 'ava';

let sorts = new Map([
	['insertion', require('../packages/sort-insertion')],
	['bubble', require('../packages/sort-bubble')],
	['selection', require('../packages/sort-selection')],
]);

sorts.forEach((sort, name) => {

	test(`{name}: sorts an array of numbers with comparator passed`, t => {
		let arr = [6, 2, 5, 10, 23, 1, 0];
		t.deepEqual(sort(arr, (a, b) => a > b), [0, 1, 2, 5, 6, 10, 23]);
	});

	test(`{name}: sorts an array of numbers without comparator passed`, t => {
		let arr = [6, 2, 5, 10, 23, 1, 0];
		t.deepEqual(sort(arr), [0, 1, 2, 5, 6, 10, 23]);
	});

	test(`{name}: sorts an array of objects`, t => {
		let arr = [{ value: 30 }, { value: 32 }, { value: 40 }, { value: 10 }];
		t.deepEqual(sort(arr, (a, b) => a.value > b.value), [{ value: 10 }, { value: 30 }, { value: 32 }, { value: 40 }]);
	});

	test(`{name}: sorting an empty array returns an empty array`, t => {
		let arr = [];
		t.deepEqual(sort(arr), []);
	});

});
