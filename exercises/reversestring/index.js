// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//  ------------------------- Easiest solution ---------------------------------
// let reverse = (str) => reversed = str.split("").reverse().join('');
// ---------------------------------------------------------------------------

// -------------------------- SOLUTION 2 -------------------------------
// let reverse = (str) => {
// 	let strArray = str.split('');
	
// 	let reversed = '';
// 	for (let i = strArray.length - 1; i >= 0; i--) {
// 		reversed += strArray[i];
// 	}
// 	return reversed;
// }
// ---------------------------------------------------------------------------
// -------------------------- SOLUTION 3 -------------------------------
// let reverse = (str) => {
// 	let reversed = '';
// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}
// 	return reversed;
// }
// ---------------------------------------------------------------------------
// -------------------------- SOLUTION 4 -------------------------------
// let reverse = (str) => {
// 	let arr = str.split('');
// 	return arr.reduce((reversed, currentCharacter) => currentCharacter + reversed);
// }
// --------- 	NOTES ---------
// Enter debugger mode with `node inspect <filename>`
// ---------------------------------------------------------------------------

reverse('asdf');

module.exports = reverse;