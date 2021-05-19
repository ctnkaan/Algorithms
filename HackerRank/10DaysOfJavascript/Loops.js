

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    //a, e, i, o, and u, 
        for (let i = 0; i < s.length; ++i) {
            if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u')
            {
                console.log(s[i]);
            }
        }
    
        for (let i = 0; i < s.length; ++i) {
            if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u')
            {
                console.log(s[i]);
            }
        }
        
    }
    
    