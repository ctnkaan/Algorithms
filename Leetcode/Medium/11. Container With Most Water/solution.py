class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) -1

        res = 0

        while (l < r):
            minHeight = min(height[l], height[r])
            width = r - l

            area = minHeight * width

            if area > res:
                res = area
            
            if height[l] < height[r]:
                l+=1
            elif height[l] > height[r]:
                r-=1
            elif height[l] == height[r]:
                if height[l+1] < height[r-1]:
                    l+=1
                else:
                    r-=1
            
        return res