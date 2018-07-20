# [728. Self Dividing Numbers 自整除數][title]

[title]: https://leetcode.com/problems/self-dividing-numbers/description/

## ❀ Origin

### Problem

A _self-dividing number_ is a number that is divisible by every digit it contains.  
For example, 128 is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.  
Also, a self-dividing number is not allowed to contain the digit zero.  
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

### Note

- The boundaries of each input argument are `1 <= left <= right <= 10000`.

### Example 1

```
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

---

## ❀ 翻譯

### 問題

自整除數 self-dividing number 是一種可以被自己所包含的所有位數整除的數.  
舉例, 128 就是一個自整除數, 因為`128 % 1 == 0`, `128 % 2 == 0`, `128 % 8 == 0` ( % 是相除取餘數)  
此外, 一個自整除數不允許有個位數是 0 .  
給定個較低的和較高的數作為邊界, 輸出的每個是自整除數的列表, 如果可能的話要包含邊界數.

### 注意

- 作為邊界的每個輸入參數都是`1 <= left <= right <= 10000`.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	const arrayResult = new Array();
	for (let i = left; i <= right; i++) {
		arrayResult.push(i);
	}

	/**
	 * Array.prototype.keys()
	 * keys() 方法會回傳一個包含陣列中的每一個索引之鍵（keys）
	 * var array1 = ['a', 'b', 'c'];
	 * var iterator = array1.keys();
	 * result [0, 1, 2]
	 *
	 * ...Array(1 + right - left)
	 * 結束 - 開始取數量, 因為要包含結束自己, 所以總數加一
	 *
	 * 總數對了後, 跑 reduce() ,
	 * 將每一個 currentValue (key) 再加上 left 並判斷後傳回 accumulator,
	 * 即為我們要找的陣列
	 */
	return [...Array(1 + right - left).keys()].reduce(function(
		accumulator,
		currentValue
	) {
		// 總數, 當前值 + 起始值
		let number = currentValue + left;

		// 用 for...in 去確認每個位數
		for (let i in number.toString()) {
			// 位數
			let digit = number.toString()[i];
			// 依題意, 要找出不包含零, 而且每個位數都可以整除自己的數
			// 故如果位數等於零, 或是相除有餘數, 便回傳原陣列.
			if (digit == 0 || number % digit != 0) {
				return accumulator;
			}
		}

		// 通過的數將 push 到 accumulator , 繼續往下執行 reduce
		accumulator.push(number);
		return accumulator;
	},
	[]);
};
console.log(selfDividingNumbers(1, 22));
```
