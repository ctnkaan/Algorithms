class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hmap = {}

        for i, val in enumerate(nums):
            if val in hmap:
                return True
            else:
                hmap[val] = i
        
        return False