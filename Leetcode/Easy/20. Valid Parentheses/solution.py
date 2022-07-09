class Solution:
    # @return a boolean
    def isValid(self, s):
        
        if len(s) % 2 != 0:
            return False
        
        stack = []
        dict = {
            "]":"[", 
            "}":"{", 
            ")":"("
        }
        
        for char in s:
            if char in dict.values():
                stack.append(char)
            elif char in dict.keys():
                if stack == [] or dict[char] != stack.pop():
                    return False
            else:
                return False
        return len(stack) == 0