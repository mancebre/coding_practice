var isMonotone = function(arr) {
	if (arr.length < 1) {
		return true;
	}
	let result = true;
	for (i in arr) {
		const prev = typeof arr[i - 1] !== 'undefined' ? arr[i - 1] : 0;
		if (arr[i] >= prev) {
			result = true;
		} else {
			result = false;
		}
		console.log(arr[i], prev);
	}

	return result; // << change this
};

console.log(isMonotone([1, 4, 7, 4, 8, 2, 5, 3]));
