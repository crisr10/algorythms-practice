// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 1 -------------------------------
// function anagrams(strA, strB) {
//   let aString = strA.replace(/[^\w]/g, '').toLowerCase();
//   let bString = strB.replace(/[^\w]/g, '').toLowerCase();

//   const strAChars = {};
//   const strBChars = {};

//   let stringMap = (str) => {
//     let mappedObject = {}
//     for (let char of str) {
//       mappedObject[char] = mappedObject[char] + 1 || 1 
//     }
//     return mappedObject;
//   }

//   if (aString.length === bString.length) {
    
//     let strAChars = stringMap(aString);
//     let strBChars = stringMap(bString);

//     for (let char in strAChars) {
//       if (strAChars[char] !== strBChars[char]) {
//         return false;
//       } else {
//         return true;
//       }
//     }

//   } else {
//     return false;
//   }
// }
  // NOTES
  // Create character maps out of aString and bString. The object is created by running a loop and adding a 1 to an existing character or creating a new instance of the character.

  // Created a helper function that creates a character map for a giving string
// Introduction to regular expressions (Helper function was created inside another function. It's better if you move the helper function outside like in solution 2)

// ---------------------------------------------------------------------
// ---------------------------- SOLUTION 2 --------------------------
// function anagrams(strA, strB) {
//   const strAMap = buildCharMap(strA);
//   const strBMap = buildCharMap(strB);

//   if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
//     return false;
//   }

//   for (let char in strAMap) {
//     if (strAMap[char] !== strBMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   let mapChars = {}
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     mapChars[char] = mapChars[char] + 1 || 1
//   }
//   return mapChars;
// }

// Cleaned up solution from the first one, more organized, and less but still readable code
// 
// ---------------------------------------------------------------------
// ---------------------------- SOLUTION 3 --------------------------

// This third solution works with the sort method, we can split() both strings and then compare both to see if they're anagrams.

function anagrams(stringA, stringB) {
  const strA = cleanUpString(stringA)
  const strB = cleanUpString(stringB)

  return strA === strB;
}

function cleanUpString (str) {
  return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// Create helper function to "Clean up" the strings. This function gets rid of all the unwanted spaces and punctuation characters, and also makes every character lower case to have clean strings to compare to.

module.exports = anagrams;
