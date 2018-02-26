// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 1 -------------------------------

// let chunk = (array, size) => {
// 	let chunkArray = []
// 	let shortArray = []
// 	for (let char of array) {
// 		if (shortArray.length === size) {
// 			chunkArray.push(shortArray)
// 			shortArray = [];
// 			shortArray.push(char);
// 		} else if (shortArray.length < size) {
// 			shortArray.push(char);
// 		}
// 	}
// 	chunkArray.push(shortArray);
// 	return chunkArray;
// }

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 2 -------------------------------

// let chunk = (array, size) => {
// 	const chunked = [];

// 	for (let element of array) {
// 		const last = chunked[chunked.length - 1];
// 		console.log(last);
// 		if (!last || last.length === size) {
// 			chunked.push([element]);
// 		} else {
// 			last.push(element);
// 		}
// 	}
// 	return chunked;
// }


// ---------------------------------------------------------------------
// -------------------------- SOLUTION 3 -------------------------------

let array = [1,2,3,4];
let chunked = [];
chunked.push(array.slice(0,2));

chunked.push(array.slice(2,4));

console.log(chunked);
console.log(array);

let chunk = (array, size) => {
	const chunked = [];
	let index = 0;
	while (index < array.length) {
		chunked.push(array.slice(index, index + size))
		index += size;
	}

	return chunked;
}


// ---------------------------------------------------------------------


console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 10))

module.exports = chunk;



