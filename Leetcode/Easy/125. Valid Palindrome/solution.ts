function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    if (s == s.split("").reverse().join("")) {
        return true;
    }

    return false;
};