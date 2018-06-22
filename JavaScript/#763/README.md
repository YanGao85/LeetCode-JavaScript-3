# 561. Array Partition I

### Question

A string `S` of lowercase letters is given.  
We want to partition this string into as many parts as possible so that each letter appears in at most one part,  
and return a list of integers representing the size of these parts.

### Note

-   `S` will have length in range `[1, 500]`.
-   `S` will consist of lowercase letters (`'a'` to `'z'`) only.

### Example 1

```
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
```

### 翻譯

#### Question
給定一個小寫字母的字串 `S` .  
我們想要將此字串盡可能地分成多個部分, 以便每個字母最多只會重覆在一個部分,  
並回傳一個代表著每個部份的長度整數的陣列.

#### Note

-   `S` 的長度會介於 `[1, 500]` .
-   `S` 只會由小寫字母 (`'a'` to `'z'`) 來組成.
