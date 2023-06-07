class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        hmap = {}

        for num in nums:
            if num in hmap:
                hmap[num] += 1
            else:
                hmap[num] = 1

        top_k = sorted(hmap, key=hmap.get, reverse=True)[:k]
        print(hmap.get)
        
        return top_k 