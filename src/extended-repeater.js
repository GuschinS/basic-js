const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let addition = options.addition;
  let lengthAdditionSeparator = 0;
  let lengthSeparator = 0;

  if (typeof str != "string") {
    str = `${str}`;
  }
  if (typeof addition == "boolean") {
    addition = `${addition}`;
  }
  if (addition === null) {
    addition = "null";
  }
  if (addition) {
    if (options.additionRepeatTimes && options.additionSeparator) {
      lengthAdditionSeparator = options.additionSeparator.length;
      addition = addition + options.additionSeparator;
      addition = addition
        .repeat(options.additionRepeatTimes)
        .slice(0, `-${lengthAdditionSeparator}`);
    } else if (options.additionRepeatTimes && !options.additionSeparator) {
      addition = addition + "|";
      addition = addition.repeat(options.additionRepeatTimes).slice(0, -1);
    }

    result = str + addition;
  }
  if (addition) {
    if (options.repeatTimes && options.separator) {
      lengthSeparator = options.separator.length;
      result = result + options.separator;
      result = result
        .repeat(options.repeatTimes)
        .slice(0, `-${lengthSeparator}`);
    } else if (options.repeatTimes && !options.separator) {
      result = result + "+";
      result = result.repeat(options.repeatTimes).slice(0, -1);
    }
  } else {
    if (options.repeatTimes && options.separator) {
      lengthSeparator = options.separator.length;
      result = str + options.separator;
      result = result
        .repeat(options.repeatTimes)
        .slice(0, `-${lengthSeparator}`);
    } else if (options.repeatTimes && !options.separator) {
      result = str + "+";
      result = result.repeat(options.repeatTimes).slice(0, -1);
    }
  }
  return result;
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
