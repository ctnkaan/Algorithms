function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length-1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left+1, right+1]
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return []

};

