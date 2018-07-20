# [561. Array Partition I][title]

[title]: https://leetcode.com/problems/array-partition-i/description/

## ❀ Origin

### Problem

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

---

## ❀ 翻譯

### 問題

給定一個 **2n** 個整數的陣列, 你的任務是將這些整數分成 **n** 組一對的整數,  
譬如 (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>), 並且這些 i 的整數對的 min(a<sub>i</sub>, b<sub>i</sub>) 的總和要盡可能的大.

### 注意

- **n** 是一個正整數, 其範圍在 [1, 10000].
- 所有在陣列中的整數, 其範圍在 [-10000, 10000].

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 依題意,
 * 講陣列兩個分成一組, 並將所有組的 min(ai, bi) 相加, 得出最大的可能
 * 若要兩個一組分, 就是小和小的一組, 大和大的一組,
 * 不然大和小的配一組, min(ai, bi) 取出小的就不是要的結果
 */
var arrayPairSum = function(nums) {
   // 先依小到大排序
	nums.sort(function(a, b) {
		return a - b;
    });
    // 建立結果的變數
    let result = 0;
    // 將處理過的陣列, 假設兩個一組, 取前面的那個數一定是最小的.
	for (let i = 0; i < nums.length; i += 2) {
        // 疊加進結果
		result += nums[i];
    }
    // 回傳
	return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
```
