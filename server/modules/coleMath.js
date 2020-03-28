module.exports = {
  /**
   * Adds 2 numbers.
   * @param {number} addend1 A number to be added
   * @param {number} addend2 A number to be added
   * @returns sum
   */
  add(addend1, addend2) {
    return addend1 + addend2;
  },

  /**
   * Subtracts 2 numbers.
   * @param {number} minuend The number to be subtracted from
   * @param {number} subtrahend The number to subtract
   * @returns difference
   */
  sub(minuend, subtrahend) {
    return minuend - subtrahend;
  },

  /**
   * Divides 2 numbers.
   * @param {number} dividend The number to be divided from
   * @param {number} divisor The number to divide by
   * @returns quotient
   */
  div(dividend, subtrahend) {
    return dividend / subtrahend;
  },

  /**
   * Multiplies 2 numbers.
   * @param     {number}    factor1 The first number
   * @param     {number}    factor2 The number to multiply the first number by
   * @returns product
   */
  mul(factor1, factor2) {
    return factor1 * factor2;
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
