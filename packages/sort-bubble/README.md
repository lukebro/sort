## sort-bubble
Bubble sort for arrays.

### example
```js
import sort from 'sort-bubble'

sort([6, 2, 5, 3], function (a, b) {
	return a > b
}) // [2, 3, 5, 6]

sort(['hello', 'how', 'are', 'you', '?'], function (a, b) {
	return a.length > b.length
}) // ['?', 'how', 'are', 'you', 'hello']

```
