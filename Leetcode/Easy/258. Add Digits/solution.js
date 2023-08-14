/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    numArr = num.toString().split("");
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += parseInt(numArr[i]);
    }
    num = sum;
  }
  return num;
};
