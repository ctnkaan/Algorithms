/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x.toString().split("").reverse().join("") == x)
        return true;
    return false;
};