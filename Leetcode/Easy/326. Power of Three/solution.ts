function isPowerOfThree(n: number): boolean {
    
    while (n % 3 === 0 && n !== 0)
        n /= 3       
    
    if (n === 1)
        return true
    return false
};