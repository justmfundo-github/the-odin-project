/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = a + b;

  // =================================

  return result;
}

// Do not change this
document.getElementById("dataTypes").innerHTML = troubleshooting(10, 2);

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = Number(prompt("enter a number"));

function numberChecker() {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would
 *    be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = "one plus eight";
const b = "22 times three";
const c = "the *remainder* of 5/4";
const d = "the variable 'a' minus 17";
const e = "the sum of the previous four variables";

module.exports = { a, b, c, d, e };
