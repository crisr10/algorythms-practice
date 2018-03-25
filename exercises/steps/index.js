// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ---------------------------------------------------------------------
// -------------------------- ATTEMPTED SOLUTION  1 -------------------------------
// function steps(n) {
//   let stepsLine = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stepsLine += "#";
//       } else {
//         stepsLine += ' ';
//       }
//     }
//     stepsLine = '';
//   }
// }
// instead of creating the empty string at the top of the fucntion, it should be created (or set to an empty string) at the beginning of the first for loop. 

// ---------------------------------------------------------------------
// -------------------------- SOLUTION  1 ------------------------------
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// ---------------------------------------------------------------------
// -------------------------- SOLUTION 2 ------------------------------
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}



console.log(steps(2));

module.exports = steps;
