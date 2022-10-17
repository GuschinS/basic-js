const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.split("@").reverse()[0];
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
getEmailDomain("prettyandsimple@example.com");
module.exports = {
  getEmailDomain,
};
