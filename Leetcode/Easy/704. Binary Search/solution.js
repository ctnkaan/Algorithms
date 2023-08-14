/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if (nums.length == 1 && nums[0] == target)
        return 0;
    
    let leftIndex = 0;
    let rightIndex = nums.length-1;
    
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex+rightIndex) / 2);
        
        if (nums[midIndex] == target)
            return midIndex;
        
        if (nums[midIndex] < target)
            leftIndex = midIndex+1;
        else
            rightIndex = midIndex-1;
    }
    
    return -1;
    
};