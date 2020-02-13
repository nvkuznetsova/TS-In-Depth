/// <reference path="utility-functions.ts" />

const booksAllowed = Utility.maxBooksAllowed(15);
console.log(booksAllowed);

import util = Utility.Fees;
const fee = util.calculateLateFee(10);
console.log(fee);