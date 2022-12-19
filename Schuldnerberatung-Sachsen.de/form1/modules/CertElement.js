

/**
 * @param {} dataBox
 * @returns {CertElement}
 */
var CertElement = function CertElement(dataBox) {
  this.subject = $(dataBox).find('.subject');
  this.sumElement = $(dataBox).find('.sum');
  this.name = this.subject.attr('name').replace(/\[|\]\[/g, ".").replace(/\]$/g, "");
};

/**
 * @param {Number} value
 */
CertElement.prototype.setSum = function (value) {
  this.sumElement.empty();
  this.sumElement.html(this.format(value, 2, 3, '.', ','));
};

/**
 * @returns {Number}
 */
CertElement.prototype.getValue = function () {
  var retVal = null;
  if (this.subject.length > 1) {
    this.subject.each(function () {
      if ($(this).is(':checked')) {
        retVal = parseFloat($(this).val());
        return;
      }
    });
    return retVal;
  }
  return parseFloat(this.subject.val());
};

/**
 * Thanks to http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 *
 * @param {Number} n
 * @param {Number} x
 * @param {string} s
 * @param {string} c
 * @returns {string}
 */
CertElement.prototype.format = function (value, n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
      num = value.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

module.exports = CertElement;

//////////////////
// WEBPACK FOOTER
// ./src/js/modules/CertElement.js
// module id = 26
// module chunks = 1

//# sourceURL=webpack:///./src/js/modules/CertElement.js?