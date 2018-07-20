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
