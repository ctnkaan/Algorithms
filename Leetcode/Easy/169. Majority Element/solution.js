/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let hmap = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        if (hmap[nums[i]])
            hmap[nums[i]]++;
        else
            hmap[nums[i]] = 1;
                
        if (hmap[nums[i]] >= nums.length / 2) 
            return nums[i];
    }
    
};