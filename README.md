# sort 🚀
A library of simple dependency-free sorting algorithms.

## [sort-insertion](https://www.npmjs.com/package/sort-insertion)
```js
import sort from 'sort-insertion';

sort([6, 2, 5, 3], function (a, b) {
	return a > b
}) // [2, 3, 5, 6]

sort(['hello', 'how', 'are', 'you', '?'], function (a, b) {
	return a.length > b.length
}) // ['?', 'how', 'are', 'you', 'hello']

```
