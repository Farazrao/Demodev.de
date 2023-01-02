
//
// var Amounts = __webpack_require__(25);
// var CertElement = __webpack_require__(26);
//
// /**
//  * @param {Amounts} amounts
//  * @returns {Certificate}
//  */
//
// function addChild() {
//
//   var index = $("div.child").length;
//   console.log("enter 3" , index)
//   var child = $($("#childrenTemplate").html().replace(new RegExp("__INDEX__", "g"), index));
//   console.log("enter 5" ,child)
//   child.find("div.childNumber").html("<span><em>Kind " + (index + 1) + "</em></span>");
//   $("#addChildElement").before(child);
//   return child;
// }
//
// function removeChild(el) {
//   $(el).remove();
// }
//
// function Certificate(amounts) {
//   console.log("enter 2")
//   if (!amounts instanceof Amounts) {
//     throw new TypeError("Amounts object needed!");
//   }
//
//   this.elements = {};
//   this.amounts = amounts;
//
//   var that = this;
//   $(".cert-box").each(function () {
//     addElement(this);
//   });
//
//   $(this.elements.childrenAmount.subject).change(function () {
//     that.adjustChildrenAmount();
//   });
// }
//
// /**
//  * @param {Object} element
//  */
// Certificate.prototype.addElement = function (element) {
//
//   var tEl = new CertElement(element),
//       that = this;
//   if (!$(tEl.subject).hasClass("dont-calc")) {
//     $(tEl.subject).change(function () {
//       that.calculate();
//     });
//     $(tEl.subject).keyup(function () {
//       that.calculate();
//       if ($(this).is("input") && $(this).attr("type") === "text") {
//         $(this).val($(this).val().replace(",", "."));
//       }
//     });
//   }
//   this.elements[tEl.name] = tEl;
// };
//
// /**
//  * @param {string} name
//  */
// Certificate.prototype.removeElement = function (name) {
//   if (typeof this.elements[name] === "undefined") {
//     throw new Error("No element with name " + name + " exists!");
//   }
//   delete this.elements[name];
// };
//
// Certificate.prototype.adjustChildrenAmount = function () {
//   console.log("enter")
//   var needed = parseInt($("#childrenAmount").val()),
//       existingChildren = $("div.child"),
//       amount = existingChildren.length;
//   if (needed < amount) {
//     for (var i = amount; i > needed; i--) {
//       existingChildren = $("div.child");
//       existingChildren.last().remove();
//       this.removeElement("children." + (i - 1) + ".allowance");
//     }
//   } else if (needed > amount) {
//     for (var i = 0; i < needed - amount; i++) {
//       this.addElement(addChild());
//     }
//   }
//
//   if (needed === 0 && amount > 0) {
//     $("#otherPaymentsChildrenRow").remove();
//     this.removeElement("otherPaymentsChildren");
//   } else if (needed > 0 && amount === 0) {
//     var otherPaymentsChildren = $($("#otherPaymentsChildrenTemplate").html());
//     otherPaymentsChildren.find('input[type="text"][name="otherPaymentsChildren"]').val(0);
//     this.addElement(otherPaymentsChildren);
//     $("#addChildElement").after(otherPaymentsChildren);
//   }
//   this.calculate();
// };
//
// /**
//  * @returns {void}
//  */
// Certificate.prototype.calculate = function () {
//   console.log("enter 2")
//   var otherExemptionsCount = 0,
//       childAllowanceCount = 0,
//       exemptedAmount = this.amounts.basicExemptionAmount,
//       tSum;
//
//   this.elements.married.setSum(0);
//   if (this.elements.married.getValue() === 1) {
//     tSum = this.amounts.calculateOtherExemptionAmount(otherExemptionsCount);
//     console.log("aaaaaa" , tSum)
//     exemptedAmount += tSum;
//     this.elements.married.setSum(tSum);
//     otherExemptionsCount++;
//   }
//
//   var childrenAmount = this.elements.childrenAmount.getValue();
//   if (childrenAmount > 0) {
//     for (var i = 0; i < childrenAmount; i++) {
//       tSum = 0;
//       this.elements["children." + i + ".allowance"].setSum(tSum);
//       if (this.elements["children." + i + ".allowance"].getValue() === 1) {
//         tSum += this.amounts.calculateChildAllowance(childAllowanceCount);
//         childAllowanceCount++;
//       }
//       tSum += this.amounts.calculateOtherExemptionAmount(otherExemptionsCount);
//       exemptedAmount += tSum;
//       this.elements["children." + i + ".allowance"].setSum(tSum);
//       otherExemptionsCount++;
//     }
//     tSum = this.elements.otherPaymentsChildren.getValue();
//     if (isNaN(tSum)) {
//       tSum = 0;
//     }
//     exemptedAmount += tSum;
//     this.elements.otherPaymentsChildren.setSum(tSum);
//   }
//
//   var exemptionAmountOtherPersons = this.elements.exemptionAmountOtherPersons.getValue();
//   var otherExemptionsSum = 0;
//   for (var i = 0; i < exemptionAmountOtherPersons; i++) {
//     otherExemptionsSum += this.amounts.calculateOtherExemptionAmount(otherExemptionsCount);
//     otherExemptionsCount++;
//   }
//   exemptedAmount += otherExemptionsSum;
//   this.elements.exemptionAmountOtherPersons.setSum(otherExemptionsSum);
//
//   tSum = this.elements.runningPayments.getValue();
//   if (isNaN(tSum)) {
//     tSum = 0;
//   }
//   exemptedAmount += tSum;
//   this.elements.runningPayments.setSum(tSum);
// };
//
// module.exports = Certificate;
//
// //////////////////
// // WEBPACK FOOTER
// // ./src/js/modules/Certificate.js
// // module id = 76
// // module chunks = 1
//
// //# sourceURL=webpack:///./src/js/modules/Certificate.js?