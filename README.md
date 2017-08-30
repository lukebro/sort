# sort 🌀
A library of simple dependency-free sorting algorithms.

All implementations of sort follow the same API but with different time complexities, choose your poison. 🍲

All sorts return a sorted array, original array stays untouched.

### [sort-insertion](https://www.npmjs.com/package/sort-insertion) - an implementation of insertion sort
### [sort-bubble](https://www.npmjs.com/package/sort-bubble) - an implementation of bubble sort
### [sort-selection](https://www.npmjs.com/package/sort-selection) - an implementation of selection sort

## example of api
```js
import sort from 'sort-bubble'

sort([6, 2, 5, 3], function (a, b) {
	return a > b
}) // returns [2, 3, 5, 6]

sort(['hello', 'how', 'are', 'you', '?'], function (a, b) {
	return a.length > b.length
}) // returns ['?', 'how', 'are', 'you', 'hello']

```
