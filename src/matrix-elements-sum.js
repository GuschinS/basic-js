const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[a].length; b++) {
      if (matrix[a][b] == 0) {
        for (let d = a + 1; d < matrix.length; d++) {
          matrix[d][b] = 0;
        }
      }
    }
  }
  for (let e = 0; e < matrix.length; e++) {
    for (let f = 0; f < matrix[e].length; f++) {
      sum += matrix[e][f];
    }
  }
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
getMatrixElementsSum(matrix);
module.exports = {
  getMatrixElementsSum,
};
