# [1. Two Sum][title]

[title]: https://leetcode.com/problems/two-sum/description/

## ❀ Origin

### Problem

Given an array of integers, return `indices` of the two numbers such that they add up to a specific target.  
You may assume that each input would have `exactly` one solution, and you may not use the same element twice.

### Example

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

---

## ❀ 翻譯

### 問題

給定一個整數陣列, 回傳兩個數字的指數 `indices` , 而這兩個數字相加必須等於目標數 `target` .  
假設每個輸入準確地只會有一組解, 且不能回傳同個數字兩次.

---

## ❀ Solution

### JavaScript

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var temp = {};
	var val;
	for (var index = 0; index < nums.length; index++) {
		val = nums[index];
		// 將 target - 當前 nums[index] 的 val,
		// target 一定是兩數字的相加,
		// 所以如果 temp[target - val] >= 0 , 則代表在 temp 找得到 key
		// 且值大於或等於0 則代表找到了, 即可 return 結果陣列

		//console.log('temp', temp);
		//console.log('temp[target - val]', temp[target - val]);
		if (temp[target - val] >= 0) {
			return [temp[target - val], index];
		}

		// 找不到的話, 則將目前的 val, 當作temp的一個 key 去儲存起來,
		// 其 key 的 val 則為目前的index
		else {
			temp[val] = index;
		}
	}
};
```
