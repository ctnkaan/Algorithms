class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # left right
        # if right is lower than left, new left it is
        # if right is larger calculate max profit

        maxProfit = 0
        left = 0
        right = 1

        while (right < len(prices)):
            if prices[right] > prices[left]:
                profit = prices[right]- prices[left]
                if profit > maxProfit:
                    maxProfit = profit
            elif prices[right] < prices[left]:
                left = right
            
            right += 1
        
        return maxProfit