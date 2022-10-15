const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let a = +sampleActivity;
  if (
    String(a) != sampleActivity ||
    sampleActivity == "" ||
    a >= 15 ||
    a <= 0 ||
    a === sampleActivity ||
    typeof sampleActivity != "string"
  ) {
    return false;
  }
  (function () {
    /**
     * Корректировка округления десятичных дробей.
     *
     * @param {String}  type  Тип корректировки.
     * @param {Number}  value Число.
     * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
     * @returns {Number} Скорректированное значение.
     */
    function decimalAdjust(type, value, exp) {
      // Если степень не определена, либо равна нулю...
      if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
      }
      // Сдвиг разрядов
      value = value.toString().split("e");
      value = Math[type](
        +(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))
      );
      // Обратный сдвиг
      value = value.toString().split("e");
      return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    }
    // Десятичное округление вверх
    if (!Math.ceil10) {
      Math.ceil10 = function (value, exp) {
        return decimalAdjust("ceil", value, exp);
      };
    }
  })();
  console.log(typeof sampleActivity);

  return (
    Math.ceil10(
      Math.log(MODERN_ACTIVITY / a) / (0.0693 / HALF_LIFE_PERIOD),
      1
    ) / 10
  );
}

module.exports = {
  dateSample,
};
