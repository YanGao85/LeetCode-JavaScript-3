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
