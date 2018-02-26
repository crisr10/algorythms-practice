// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let chars = {}
	let maxCount = 0;
	let maxChar = '';
	for (let char of str) {
		chars[char] = chars[char] + 1 || 1
	};
	for (let char in chars) {
		if (chars[char] > maxCount) {
			maxCount = chars[char]
			maxChar = char;
		}
	}
	return maxChar;
}

console.log(maxChar("abcccccccd"));

module.exports = maxChar;

// Loop throught the object and find the value of each character. Now loop agian through this new object of characters and