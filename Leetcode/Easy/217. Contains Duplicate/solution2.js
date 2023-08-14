/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    if (nums.length == 1)
        return false;
    
    let hmap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        
        if (hmap.has(nums[i]))
            return true;
        
        hmap.set(nums[i], i);
    }
    
    return false;
};