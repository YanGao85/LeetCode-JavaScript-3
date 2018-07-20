
# [238. Product of Array Except Self 除了自身以外的陣列乘積][title]

[title]: https://leetcode.com/problems/array-partition-i/description/

## ❀ Origin

### Problem

Given an array `nums` of n integers where *n* > 1,  
return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

### Example

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

### Note

Please solve it **without division** and in O(*n*).

### Follow up

Could you solve it with constant space complexity?  
(The output array **does not** count as extra space for the purpose of space complexity analysis.)

---

## ❀ 翻譯

### 問題

給定一個整數 *n* > 1 的陣列 `nums` ,  
回傳一個陣列 `output` , 且 `output[i]` 是等於 `nums` 裡每一個數除了 `nums[i]` 以外的乘積.

### 注意

請用沒有**除法**且時間複雜度 O(*n*) 的方式解決.

### 後續

你可以滿足常數空間複雜度地解決嗎?  
(出於空間複雜度分析的目的, 輸出陣列**不會**被當作額外空間)

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * nums = [a, b, c, d] = [1, 2, 3, 4]
 * output = [b*c*d, a*c*d, a*b*d, a*b*c]
 * 往左乘 [1,       a, a*b, a*b*c] = [1 , 1 , 2, 6]
 * 往右乘 [b*c*d, c*d,   d,    1]  = [24, 12, 4, 1]
 */
var productExceptSelf = function(nums) {
	if (nums.length <= 1) {
		return nums;
	}
	let length = nums.length;
	let arrResult = new Array();
	let leftProduct = 1;
	let rightProduct = 1;

	// 先從左至右, 算往左乘的乘積
	for (let i = 0; i < length; i++) {
		arrResult[i] = leftProduct;
		leftProduct *= nums[i];
	}

	// 從右至左, 算往右的乘積, 並與往左的乘積相乘
	for (let j = length - 1; j >= 0; j--) {
		arrResult[j] *= rightProduct;
		rightProduct *= nums[j];
	}

	return arrResult;
};

console.log(productExceptSelf([1, 2, 3, 4]));
```
