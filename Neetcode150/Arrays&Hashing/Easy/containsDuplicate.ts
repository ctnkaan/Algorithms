/*
 *
 * Create a set with the nums array and check for the length of set and nums array.
 * Their length HAS to be the DIFFERENT if there is a number that repeats.
 *
 * Time: O(n) - length of nums to create a set
 * Space: O(n) - length of nums stored in a set
 *
 */

function containsDuplicate(nums: number[]): boolean {
	const set = new Set(nums);
	return !(set.size === nums.length);
}
