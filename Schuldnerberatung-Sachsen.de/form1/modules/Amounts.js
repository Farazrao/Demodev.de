

/**
 * @param {Number} childAllowanceDefault
 * @param {Number} childAllowanceAmounts
 * @param {Number} basicExemptionAmount
 * @param {Number} otherExemptionAmounts
 * @returns {Amounts}
 */
var Amounts = function Amounts(childAllowanceDefault, childAllowanceAmounts, basicExemptionAmount, otherExemptionAmounts) {
  this.childAllowanceDefault = childAllowanceDefault;
  this.childAllowanceAmounts = childAllowanceAmounts;
  this.basicExemptionAmount = basicExemptionAmount;
  this.otherExemtpionAmounts = otherExemptionAmounts;
};

/**
 * @param {Number} index
 * @returns {Number}
 */
Amounts.prototype.calculateChildAllowance = function (index) {
  return typeof this.childAllowanceAmounts[index] !== 'undefined' ? this.childAllowanceAmounts[index] : this.childAllowanceDefault;
};

/**
 * @param {Number} index
 * @returns {Number}
 */
Amounts.prototype.calculateOtherExemptionAmount = function (index) {
  return typeof this.otherExemtpionAmounts[index] !== 'undefined' ? this.otherExemtpionAmounts[index] : 0;
};

module.exports = Amounts;

//////////////////
// WEBPACK FOOTER
// ./src/js/modules/Amounts.js
// module id = 25
// module chunks = 1

//# sourceURL=webpack:///./src/js/modules/Amounts.js?