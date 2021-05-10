// const products = [
// 	{ id: 1, name: 'jedan' },
// 	{ id: 2, name: 'dva' },
// 	{ id: 3, name: 'tri' },
// 	{ id: 4, name: 'cetiri' },
// ];

// const findById = (id) => {
// 	const result = products.filter((x) => x.id === id)[0];
// 	if (typeof result !== 'undefined') {
// 		return result;
// 	} else {
// 		return false;
// 	}
// };

// console.log(findById(3));

const n = 6;
console.log(Array.from({ length: n + 1 }, (v, k) => k));
