
# [448. Find All Numbers Disappeared in an Array 找出所有消失在陣列裡的數字][title]

[title]: https://leetcode.com/problems/array-partition-i/description/

> 算法二很有趣, 找缺少數的問題可以應用

## ❀ Origin

### Problem

Given an array of integers where 1 ≤ a[i] ≤ _n_ (_n_ = size of array),  
some elements appear twice and others appear once.

Find all the elements of [1, *n*] inclusive that do not appear in this array.

Could you do it without extra space and in O(_n_) runtime?  
You may assume the returned list does not count as extra space.

### Example

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

---

## ❀ 翻譯

### 問題

給定一個整數陣列, 其中值的範圍在 1 ≤ a[i] ≤ _n_ (_n_ 等於陣列長度),  
有些元素出現兩次, 其他則出現一次.

找出所有包含在 [1, *n*] 裡但沒有出現在這個陣列裡的所有元素.

你可以做到沒有額外空間並且時間複雜度為 O(_n_) 嗎?  
你可以認為那個回傳答案的陣列不算入額外空間.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 第一種寫法
 * nums.indexOf(i) 的能太差,
 * 在leetcode上只落在倒數的答案,
 * 母湯, 趕緊爬文
 */

var findDisappearedNumbers = function(nums) {
	var res = [];
	for (var i = 1; i < nums.length + 1; i++) {
		if (nums.indexOf(i) === -1) res.push(i);
	}
	return res;
};

```
### JavaScript II

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 第二種寫法
 * 參考 leetcode 此題第一名的寫法
 *  依題意, 有些數字會出現兩次, 有些一次, 要找出缺少的數字
 *  因此第一名的寫法使用正負關係搭配絕對值, 實在很強
 */
var findDisappearedNumbers = function(nums) {
	const result = [];
	// 因為nums裡的值會是 1 ≤ a[i] ≤ nums.length 的陣列
	// 所以不一定要整理, 直接找出該數應該在整理後的陣列的位置
	// index = Math.abs(nums[i]) - 1
	for (let i = 0; i < nums.length; i++) {
		// nums[i] 取絕對值, 並 -1 ,
		// 找出該數應該在整理後的陣列的位置
		const index = Math.abs(nums[i]) - 1;

		// console.log('index', index, 'nums[index]', nums[index]);
		// console.log('');
		// 使用正負搭配絕對值, 是因為迴圈跑到那數字時, 還要去找那數字的應該存在的位置,
		// 用負數, 比較像是個畫記號的概念, 實在是太ㄎㄧㄠˋ了
		if (nums[index] > 0) {
			nums[index] = -nums[index];
		}
		// console.log('nums', nums);
		// console.log('---');
	}
	/**
	 * 當上面的程式執行完, 剩下的正數的位置便代表沒被轉換過的數, 即是缺少的數
	 */
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			// 因為題意是 1 ≤ a[i] ≤ nums.length ,
			// 故找出位置後, 還要 +1 , 才是缺少的那個數字
			result.push(i + 1);
		}
	}

	return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1, 8]));

```
