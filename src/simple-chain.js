const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain();

module.exports = {
  chainMaker,
};
