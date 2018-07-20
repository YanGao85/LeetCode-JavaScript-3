
# [283. Move Zeroes 移動零][title]

[title]: https://leetcode.com/problems/move-zeroes/description/

## ❀ Origin

### Problem

Given an array `nums`,  
write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

### Note

1.  You must do this **in-place** without making a copy of the array.
2.  Minimize the total number of operations.

### Example

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

---

## ❀ 翻譯

### 問題

給定一個陣列 `nums` ,  
寫一個函數去移動所有的 `0` 到最後面, 且過程中保持非零元素的相對順序.

### 注意

1.  你必須在不製作一個複製陣列的情況下, 就以此操作.
2.  最小化所有的操作數.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 移動所有的零到陣列最後面, 且不能新建多的陣列.
 *
 * 思路為遍歷每個元素,
 * 如果遇到 0 , 就忽略
 *
 * 遇到不是 0 ,
 * 就將該元素 nums[i] 的值放到 nums[position],
 * 並將 position + 1
 *
 * 以次類推,
 * nums 全部遍歷完之後,
 * 全部非零元素就會依照原本順序, 排在陣列最前面了.
 *
 * 之後再從該陣列位置的 position 為起始,
 * 將後面的值改成 0 , 即可.
 *
 * 例如：
 * position = 0, i = 0,
 * [0, 1, 0, 3, 12],
 * nums[i] = 0, 忽略
 *
 * position = 0, i = 1,
 * [0, 1, 0, 3, 12],
 * nums[i] = 1,
 * nums[position] = nums[i]
 * [1, 1, 0, 3, 12]
 * position + 1
 *
 * position = 1, i = 2,
 * [1, 1, 0, 3, 12],
 * nums[i] = 0, 忽略
 *
 * position = 1, i = 3,
 * [1, 1, 0, 3, 12],
 * nums[i] = 3,
 * nums[position] = nums[i]
 * [1, 3, 0, 3, 12]
 * position + 1
 *
 * position = 2, i = 4,
 * [1, 3, 0, 3, 12],
 * nums[i] = 12,
 * nums[position] = nums[i]
 * [1, 3, 12, 3, 12]
 * position + 1
 *
 * 最後將陣列從 position 開始後的元素都置換成 0
 *
 */
var moveZeroes = function(nums) {
	let position = 0,
		len = nums.length;

	for (let i = 0; i < len; i++) {
		if (nums[i] !== 0) {
			nums[position] = nums[i];
			position++;
		}
	}

	for (let i = position; i < len; i++) {
		nums[i] = 0;
	}
	// return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));
```

### JavaScript II

```JavaScript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * 第二種寫法,
 * 比較直覺,
 * 遇到零, 抓出來往後丟
 *
 * 從後面開始遍歷,
 * 如果 nums[i] === 0
 * 便將該位置移除 ( nums.splice(i, 1) ),
 * 最後面推一個 0 回去.
 *
 * 注意：
 * 不能從頭開始找,
 * 因為從頭的話, splice 後會刪除一個元素, 之後 push 加到最後,
 * 這樣又照著遍歷跑時, 有一個元素會被忽略
 *
 * 譬如
 * i = 0 [0, 0, 1] -> [0, 1, 0]
 * i = 1 [0, 1, 0] -> [0, 1, 0]
 *
 * 連續的第二個也是零的話就會被忽略了
 *
 */
var moveZeroes = function(nums) {
	for (let i = nums.length; i >= 0; i--) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
	// return nums;
};
// console.log(moveZeroes([0, 0, 1]));
```
