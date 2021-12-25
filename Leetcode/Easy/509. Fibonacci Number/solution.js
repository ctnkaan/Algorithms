/**
 * @param {number} n
 * @return {number}
 */

 const func = (n) => {
    
    let n1=0,n2=1,next=0;
    
    for (let i = 1; i <= n; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    
    return n1;
}

var fib = function(n) {
    
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    
    const result1 = func(n-1);
    const result2 = func(n-2);
    
    return (result1+result2)
};