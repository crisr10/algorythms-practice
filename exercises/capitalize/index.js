// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const stringArray = str.split('');
  let capitalize = true;
  let upperCaseString = '';
  for (let char of stringArray) {
    if (capitalize) {
      upperCaseString += char.toUpperCase();
      capitalize = false;
    } else if (char === ' ') {
      capitalize = true;
      upperCaseString += char;
    } else {
      upperCaseString += char;
    }
  }
  return upperCaseString;
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;


// If a character is a space, then capitalize needs to be set to true. This way when you go over the next character you can use toUpperCase() and push to the string. If a character is capitalize then capitalize should be set to false.