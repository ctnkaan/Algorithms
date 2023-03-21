class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hmap = {}

        for i, val in enumerate(nums):
            diff = target - val
            if diff in hmap:
                return [hmap[diff], i]
            else:
                hmap[val] = i
        return