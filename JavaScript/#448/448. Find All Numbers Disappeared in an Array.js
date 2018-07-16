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
