function isAnagram(s: string, t: string): boolean {
    
    if (s.length !== t.length) {
        return false;
    }
    
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    
    return true;
};