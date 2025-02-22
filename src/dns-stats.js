const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  result = {};
  domains.map((el) => {
    let arrayDns = el.split(".").reverse();
    for (let i = 0; i < arrayDns.length; i++) {
      let itemDns = "." + arrayDns.slice(0, i + 1).join(".");
      if (result.hasOwnProperty(itemDns)) {
        result[itemDns]++;
      } else {
        result[itemDns] = 1;
      }
    }
  });
  return result;
  console.log("result: ", result);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
getDNSStats(domains);

module.exports = {
  getDNSStats,
};
