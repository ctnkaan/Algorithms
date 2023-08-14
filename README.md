# Data Structures and Algorithms

Hello! This is a repository of my solutions to various data structures and algorithms problems. I will be updating this repository as I continue to learn and solve more problems. I will also be adding notes to each solution as I go along. I hope you find this repository useful!

---

## Total Problems Solved

* LeetCode: 69
* HackerRank: 42
* CodeWars: 11

## LeetCode Solutions With Notes

| Id   | Name | Question Complexity | LeetCode Url | Notes |
|-|-|-|-|-|
| 101      | Symmetric Tree     | 🟩 Easy      | https://leetcode.com/problems/symmetric-tree/      | Divide & Conquer. Use recursion to compare right and left side of the tree|
| 217      | Contains Duplicate | 🟩 Easy      | https://leetcode.com/problems/containts-duplicate/ | Use a hashmap to keep track of seen numbers |
| 242      | Valid Anagram      | 🟩 Easy      | https://leetcode.com/problems/valid-anagram/       | Use a hashmap to keep track of seen characters then decrease their values when looking at characters of the 2nd string
| 1      | Two Sum        | 🟩 Easy      | https://leetcode.com/problems/two-sum/  | Use a hashmap to store seen values. Check if the target-currentValue exists in the hashmap |
| 49      | Group Anagrams        | 🟨 Medium  | https://leetcode.com/problems/group-anagrams/  | Reverse each element and store them in a hashmap with same key and value. If there are duplicates update the values array of that id |
| 347      | Top K Frequent Elements       | 🟨 Medium  | https://leetcode.com/problems/top-k-frequent-elements/ | Put values and their frequencies ina  hashmap. Sort in descending order, push the elements to a result array. |
| 128      | Longest Consecutive Sequence  | 🟨 Medium  | https://leetcode.com/problems/longest-consecutive-sequence/ | Use a set and traverse it to check if there is a lower number. If not it's a sequence starter. Check for larger numbers to add to that sequence and repeat. Return the sequence with the longest array |