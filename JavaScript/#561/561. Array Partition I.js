/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 依題意,
 * 講陣列兩個分成一組, 並將所有組的 min(ai, bi) 相加, 得出最大的可能
 * 若要兩個一組分, 就是小和小的一組, 大和大的一組, 
 * 不然大和小的配一組, min(ai, bi) 取出小的就不是要的結果
 */
var arrayPairSum = function(nums) {
   // 先依小到大排序
	nums.sort(function(a, b) {
		return a - b;
    });
    // 建立結果的變數
    let result = 0;
    // 將處理過的陣列, 假設兩個一組, 取前面的那個數一定是最小的.
	for (let i = 0; i < nums.length; i += 2) {
        // 疊加進結果
		result += nums[i];
    }
    // 回傳
	return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
