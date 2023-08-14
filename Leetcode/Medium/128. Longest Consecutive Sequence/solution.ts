function longestConsecutive(nums: number[]): number {
    /* 
        1) Make the nums a set
        2) Since each sequence starter does not have a lower value check for starter
        3) If no starter, skip, if starter check for higher value
        4) Continue to add to sequence for each higher value
        5) Return the highest value 
    */

    const hasLeftNeighbour = (num: number) => {
        if (numSet.has(num-1)) {
            return false;
        } else {
            return true
        }
    }

    const numSet = new Set(nums);
    
    const seq = new Map();

    numSet.forEach((num) => {
        const isStarter = hasLeftNeighbour(num);

        if (isStarter) {
            seq.set(num, [num]);

            let curr = num + 1;
            while (numSet.has(curr)) {
                seq.get(num).push(curr);
                curr++;
            }
        }
    })


    let longest = 0;

    seq.forEach((val, key) => {
        if (val.length > longest) {
            longest = val.length;
        }
    })


    return longest;
};