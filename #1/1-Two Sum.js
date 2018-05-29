var twoSum = function(nums, target) {
	var temp = {};
	var val;
	for (var index = 0; index < nums.length; index++) {
		val = nums[index];
		//將 target - 當前的val, 如果 temp[target - val] >= 0 , 則代表在temp找得到key 
		//且值大於或不等於0 則代表找到了, 即可return 陣列
		if (temp[target - val] >= 0) {
			//console.log(temp[target-val],index)
			return [temp[target - val], index];
		} 
		// 找不到的話, 則將目前的 val, 當作temp的一個 key 去儲存起來,
		// 其 key 的 val 則為目前的index
		else {
			temp[val] = index;
		}
	}
};

