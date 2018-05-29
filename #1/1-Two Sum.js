var twoSum = function(nums, target) {
	var temp = {};
	var val;
	for (var index = 0; index < nums.length; index++) {
		val = nums[index];
		//將target(9) - 當前的val,如果在temp找得到key代表有值 且值大於或不等於0
		//則代表找到了, 即可return 陣列
		if (temp[target - val] >= 0) {
			//console.log(temp[target-val],index)
			return [temp[target - val], index];
		} else {
			//將陣列巡迴的值,存做temp的key值, value存為陣列的第幾個
			temp[val] = index;
		}
	}
};


//https://leetcode.com/problems/two-sum/description/