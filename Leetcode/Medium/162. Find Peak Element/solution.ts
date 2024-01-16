function findPeakElement(nums: number[]): number {
	for (let i = 1; i < nums.length; i++) {
		if (
			(nums[i] > nums[i - 1] || nums[i - 1] === undefined) &&
			(nums[i] > nums[i + 1] || nums[i + 1] === undefined)
		)
			return i;
	}

	return 0;
}
