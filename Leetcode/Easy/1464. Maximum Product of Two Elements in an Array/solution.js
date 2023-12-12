/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const largest = Math.max(...nums)
    let removed = false

    nums = nums.filter(num => {
        if (num === largest && !removed) {
            removed = true
            return false
        }
        return true
    })

    const secondLargest = Math.max(...nums)

    return ((largest - 1) * (secondLargest - 1))
};