const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let filterName = members.filter((el) => typeof el === "string");
  console.log("filterName: ", filterName);
  let trim = filterName.map((el) => el.toUpperCase().trim());
  let sortName = trim.sort();
  console.log("trim: ", trim);
  let string = "";
  sortName.map((el) => (string += el[0]));
  return string;
}

module.exports = {
  createDreamTeam,
};
