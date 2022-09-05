
/* 
1. create a hashmap to store all the values and an empty sum array
2. loop through strs
3. sort the values
4. chain the values that are anagrams
5. for each value in the hashmap, add it to the sum array
6. return sum array
*/

var groupAnagrams = function(strs) {
    
    const hmap = new Map();
    const sum = [];
    
    strs.forEach((string) => {
        const sortedString = string.split("").sort().join("");
        
        if (hmap.has(sortedString)) {
            const newVals = hmap.get(sortedString);
            newVals.push(string);
            hmap.set(sortedString, newVals);
        }
        else {
            const strArr = [string]
            hmap.set(sortedString, strArr);
        }
            
    });

    hmap.forEach((value) => {
       sum.push(value);
    });
    
    return sum;
    
};