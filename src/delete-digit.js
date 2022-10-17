const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString();
  let numberArr = [];
  for (let i = 0; i < num.length; i++) {
    numberArr.push(Number(num.replace(num[i], "")));
  }
  numberArr.sort((a, b) => b - a);
  return numberArr[0];

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
