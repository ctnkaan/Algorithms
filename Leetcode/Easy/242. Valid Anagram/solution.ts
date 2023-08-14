/*
    1. return false if lengths do not match since it's impossible to be anagram with different lengths
    2. create a hashmap for s and set it up with the characters in s string and their occurrences
    3. iterate through t string and check if the same amount of characters are in the hashmap.
    4. if the key is not in the hashmap or the value is equal to zero, return false
    5. else return true
*/

function isAnagram(s: string, t: string): boolean {
    
    if (s.length !== t.length) {
        return false;
    }
    
    let hmap_s = {};
    
    for (let i = 0; i < s.length; i++) {
        if (hmap_s[s[i]]) {
            hmap_s[s[i]]++;
        } else {
            hmap_s[s[i]] = 1;
        }
    }
    
    for (let i = 0;  i < t.length; i++) {
        if (hmap_s[t[i]]) {
            hmap_s[t[i]]--;
        } else {
            return false;
        }
    }
    
    return true;
    
};