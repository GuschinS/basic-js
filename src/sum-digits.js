const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let sum = 0;
  while (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      sum = sum + Number(str[i]);
    }
    str = String(sum);
    sum = 0;
  }
  return Number(str);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
getSumOfDigits(156);
module.exports = {
  getSumOfDigits,
};
