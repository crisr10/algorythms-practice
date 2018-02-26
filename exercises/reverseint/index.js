// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 1 -------------------------------

// let reverseInt = (int) => {
// 	let number = int

// 	if (int < 0) {
// 		number = number * -1
// 	}
// 	let reversedInt = '';

// 	for (let character of number.toString()) {
// 		reversedInt = character + reversedInt;
// 	}
// 	return parseInt(reversedInt) * Math.sign(int);
// }

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 2 -------------------------------

let reverseInt = (n) => {
	const reversed = n.toString().split('').reverse().join('')

	return parseInt(reversed) * Math.sign(n);
}

// ---------------------------------------------------------------------

reverseInt(-15) === -51

module.exports = reverseInt;
