/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    let left = 0, right = 0, sum = 0;
    
    //get total
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    
    for (let i = 0; i < nums.length; i++) {
        
        right = sum - nums[i] - left;
        
        if (right == left) 
            return i;
        left += nums[i];
    }
    
    return -1;
    
};