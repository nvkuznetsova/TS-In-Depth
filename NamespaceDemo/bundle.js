var Utility;
(function (Utility) {
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var booksAllowed = Utility.maxBooksAllowed(15);
console.log(booksAllowed);
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log(fee);
