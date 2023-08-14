/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    //max profit
    let p = 0;
    
    for (let b = 0, s = 1; s < prices.length; s++) {
        if (prices[b] < prices[s]) {
            if (prices[s] - prices[b] > p) {
                p = prices[s] - prices[b];
            }
        }
        
        else if (prices[b] >= prices[s]) {
            b = s;
        }
    }
    return p;
};