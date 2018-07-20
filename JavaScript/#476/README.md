
# [476. Number Complement 數字補數][title]

[title]: https://leetcode.com/problems/number-complement/description/

## ❀ Origin

### Problem

Given a positive integer, output its complement number.  
The complement strategy is to flip the bits of its binary representation.

### Note

1.  The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2.  You could assume no leading zero bit in the integer’s binary representation.

### Example 1

```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

### Example 2

```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

---

## ❀ 翻譯

### 問題

給定一個正整數, 輸出其補數.  
補數的定義是翻轉其二進制數的每個代表位元.

### 注意

1.  給定的整數保證符合在 32 位元有號數的範圍內.
2.  你可以在整數的二進制表示裡假設其沒有前面的 0 位元.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number} num
 * @return {number}
 */

/**
 * XOR 相同為零 不同為一
 * NOR 理論上也可以, 只是目前不曉得如何在JS使用 NOR
 */
var findComplement = function(num) {
	// 先取得目標數的二進制的長度
	var binaryLength = num.toString(2).length;

	// 使用 Math.pow() , 取得全為 1 的數, 2的n次方 -1
	var TheAllOneNum = Math.pow(2, binaryLength) - 1;

	// 與其執行 NOR
	return num ^ TheAllOneNum;
};
console.log(findComplement(9));
```
