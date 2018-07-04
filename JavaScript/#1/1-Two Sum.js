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
// console.log(twoSum([2, 7, 11, 15], 9));
