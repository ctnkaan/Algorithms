/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    const hmap = new Map();
    let sum = 0;
    
    for (const num of nums) {
        if (hmap.has(num)) {
            sum += hmap.get(num);
            hmap.set(num, hmap.get(num) + 1);
        } else {
            hmap.set(num, 1);
        }
    }   
    
    return sum;
};