/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    if (nums.length == 1)
        return false;
    
    nums.sort();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1])
            return true;
    }
    
    return false;
};