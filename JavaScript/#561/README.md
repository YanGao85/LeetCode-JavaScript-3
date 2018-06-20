# 561. Array Partition I

### Question 
Given an array of **2n** integers, your task is to group these integers into **n** pairs of integer,  
say (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>), which makes sum of min(a<sub>i</sub>, b<sub>i</sub>) for all i from 1 to n as large as possible.


### Note  
 - **n** is a positive integer, which is in the range of [1, 10000].
 - All the integers in the array will be in the range of [-10000, 10000].  

### Example 1
```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

  
### 翻譯
#### Question
給定一個 **2n** 個整數的陣列, 你的任務是將這些整數分成 **n** 組一對的整數,  
譬如 (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>), 並且這些 i 的整數對的 min(a<sub>i</sub>, b<sub>i</sub>) 的總和要盡可能的大.

#### Note 
 - **n** 是一個正整數, 其範圍在 [1, 10000].
 - 所有在陣列中的整數, 其範圍在 [-10000, 10000].
