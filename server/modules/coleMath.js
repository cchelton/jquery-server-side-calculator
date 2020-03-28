module.exports = {
  /**
   * Adds 2 numbers.
   * @param     {number}    a   addend
   * @param     {number}    b   addend
   * @returns                   sum
   */
  add(a, b) {
    return a + b;
  },

  /**
   * Subtracts 2 numbers.
   * @param     {number}    a   minuend
   * @param     {number}    b   subtrahend
   * @returns                   difference
   */
  sub(a, b) {
    return a - b;
  },

  /**
   * Divides 2 numbers.
   * @param     {number}    a   dividend
   * @param     {number}    b   divisor
   * @returns                   quotient
   */
  div(a, b) {
    return a / b;
  },

  /**
   * Multiplies 2 numbers.
   * @param     {number}    a   factor
   * @param     {number}    b   factor
   * @returns                   product
   */
  mul(a, b) {
    return a * b;
  },

  /**
   * Prepares a new history object to be pushed to the array.
   * @param {string} mathStr the mathString for a history obj ex. "1+2"
   * @param {number} mathResult the result of calculations
   * @returns object ready to be pushed to history
   */
  newHistObj(mathStr, mathResult) {
    return {
      mathString: mathStr,
      result: mathResult
    };
  }
};
