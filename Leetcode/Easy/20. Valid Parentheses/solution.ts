function isValid(s: string): boolean {
    const closing = [')', ']', '}'];
    const opening = ['(', '[', '{'];
    
    let stack = [], stackLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (closing.includes(s[i])) {
            const lastOpening = stack.pop();
            stackLen--;
            if (opening.indexOf(lastOpening) !== closing.indexOf(s[i])) {
                return false;
            }
        } else {
            stack.push(s[i]);
            stackLen++;
        }
    }
    
    if (stackLen > 0) {
        return false;
    } else {
        return true;
    }
    
};