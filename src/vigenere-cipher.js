const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type == undefined ? true : type;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.crypt(str, key, "encrypt");
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    return this.crypt(str, key, "decrypt");
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
  crypt(str, key, mode) {
    let result = [];
    str = str.toUpperCase();
    key = key.padEnd(str.length, key).toUpperCase();
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        if (mode == "decrypt") {
          result += String.fromCharCode(
            ((str.charCodeAt(i) - key.charCodeAt(count) + 26) % 26) + 65
          );
        } else {
          result += String.fromCharCode(
            ((str.charCodeAt(i) + key.charCodeAt(count)) % 26) + 65
          );
        }
        count += 1;
      } else {
        result += str[i];
      }
    }
    return this.type ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
