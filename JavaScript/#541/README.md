# 557. Reverse Words in a String III

### Question 
Given a string `s` and an integer `k`,  
you need to reverse the first k characters for every 2k characters counting from the start of the string.  
If there are less than k characters left, reverse all of them.  
If there are less than 2k but greater than or equal to k characters,  
then reverse the first k characters and left the other as original.  

### Note  
 1. The string consists of lower English letters only.
 2. Length of the given string and k will in the range [1, 10000]

### Example 
```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```


  
### 翻譯
#### Question
給定一個字串 `s` 和一個整數 `k`,  
你必須從字串的一開始與每 2k 的位置開始倒轉前 k 個字元.  
如果字串小於 k 個字元, 倒轉全部.  
如果字串小於 2k 個字元但是大於 k 個字元, 則倒轉最前面的 k 個字元, 並將其他的照原樣保存.  

#### Note 
 - 在字串裡只會包含小寫英文字母.
 - 給定的字符和整數 k 的範圍在 `[1, 10000]`
