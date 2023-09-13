class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        # ans stack
        # loop while stack len less than word1 len + word2 len
        # push to stack first word1 then word2

        stack = []
        i = 0
        while len(stack) < len(word1) + len(word2):

            if i < len(word1):
                stack.append(word1[i])

            if i < len(word2):
                stack.append(word2[i])

            i+=1

        s = ""

        return s.join(stack)


