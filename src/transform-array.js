const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let transformArray = [];
  arr.map((el, index) => {
    if (el != "--discard-next") {
      if (el != "--discard-prev") {
        if (el != "--double-next") {
          if (el != "--double-prev") {
            transformArray.push(el);
            if (arr[index - 1] === "--discard-next") {
              transformArray.pop(el);
            }
          }
        }
      }
    }

    if (el === "--double-next") {
      if (arr[index + 1]) {
        transformArray.push(arr[index + 1]);
      }
    }
    if (el === "--double-prev") {
      if (arr[index - 1]) {
        if (arr[index - 2] != "--discard-next") {
          transformArray.push(arr[index - 1]);
        }
      }
    }
    if (el === "--discard-prev") {
      if (arr[index - 1]) {
        if (arr[index - 2] != "--discard-next") {
          transformArray.pop(arr[index - 1]);
        }
      }
    }
  });
  return transformArray;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
