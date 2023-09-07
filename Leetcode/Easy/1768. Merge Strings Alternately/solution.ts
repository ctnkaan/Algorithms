function mergeAlternately(word1: string, word2: string): string {
    
    let i = 0, ans = [];
    while(i < word1.length || i < word2.length) {
        if (i < word1.length) {
            ans.push(word1.split("")[i])
        }
        if (i < word2.length) {
            ans.push(word2.split("")[i])
        }

        i++;
    } 

    return ans.join("");
};