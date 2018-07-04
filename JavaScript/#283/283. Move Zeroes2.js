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
