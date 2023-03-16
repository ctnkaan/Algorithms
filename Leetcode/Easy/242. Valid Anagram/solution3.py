class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        if (len(s) != len(t)):
            return False
        
        hmap = {}

        for index, val in enumerate(s):
            if (val in hmap):
                hmap[val] += 1
            else:
                hmap[val] = 1
        for i, val in enumerate(t):
            if (val in hmap):
                hmap[val] -= 1
                if (hmap[val] < 0):
                    return False
            else:
                return False
        
        return True

