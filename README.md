# sort 🚀
A library of simple dependency-free sorting algorithms.

All implementations of sort follow the same API but with different time complexities, choose your poison. 🍲

### [sort-insertion](https://www.npmjs.com/package/sort-insertion) - an implementation of insertion sort
### [sort-bubble](https://www.npmjs.com/package/sort-bubble) - an implementation of bubble sort

## example of api
```js
import sort from 'sort-bubble'

sort([6, 2, 5, 3], function (a, b) {
	return a > b
}) // [2, 3, 5, 6]

sort(['hello', 'how', 'are', 'you', '?'], function (a, b) {
	return a.length > b.length
}) // ['?', 'how', 'are', 'you', 'hello']

```
