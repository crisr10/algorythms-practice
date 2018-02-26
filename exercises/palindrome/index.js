// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// The first thing to take into consideration is the fact that we need to reverse a string. There is a post in Cristian's programming journal that shows just how to do that.

// -------------------------- SOLUTION 1 -------------------------------

// let palindrome = (str) => {
// 	let strArr = str.split('');
// 	let reversed = strArr.reduce((reversed, character) => character + reversed);
// 	return str === reversed;
// }
// ---------------------------------------------------------------------
// -------------------------- SOLUTION 2 -------------------------------

// let palindrome = (str) => {
// 	return str.split('').reverse().join('') === str;
// }

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 3 -------------------------------

// let palindrome = (str) => {
// 	let reversed = ''
// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}
// 	return reversed === str;
// 
// ---------------------------------------------------------------------
// -------------------------- SOLUTION 4 -------------------------------

let palindrome = (str) => {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	})
}

palindrome('aba');

module.exports = palindrome;

