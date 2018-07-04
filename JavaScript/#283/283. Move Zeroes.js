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
