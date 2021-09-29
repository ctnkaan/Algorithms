var getConcatenation = function(nums) {
    
    let j = nums.length;
    
    for (let i = 0; i < j; i++)
        nums.push(nums[i]);
    
    return nums;
};