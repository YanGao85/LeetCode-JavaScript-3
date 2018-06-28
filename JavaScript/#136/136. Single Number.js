/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 最初的想法,
 * 但題目希望時間複雜度是線性的解答
 * 第一個解法每次都執行了兩次 find index 複雜度
 * O(n^2) 不符合題目要求
 */
// var singleNumber = function(nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) return nums[i];
// 	}
// };


/**
 * 網路上大神的解法,
 * 為了讓時間複雜度能更等於 O(n),
 * 那一定只能執行一次, 裡面還不能有任何尋找的動作
 * 
 * 所以大神使用了 XOR ^ ,
 * 因為 XOR 的特性, 相同為0 不同為1.
 *
 * XOR
 * 9 | 1 0 0 1
 * 2 | 0 0 1 0
 * ============ 
 * 11| 1 0 1 1
 * 
 * 2 | 0 0 1 0
 * 2 | 0 0 1 0
 * ============ 
 * 0 | 0 0 0 0
 * 
 * 還有遵守 交換率 
 * 所以 A ^ B ^ C  = (A ^ B) ^ C = A ^ (B ^ C)
 * 
 * 依題目,
 * 陣列會是一對對的數字, 要找出單身狗
 * 那因為 XOR 的關係, 
 * 自己跟自己 XOR, 那一定等於零, 
 * 而任何數跟零做XOR, 會等於自己.
 * 
 * 所以一對一對的數字 XOR後會等於0,
 * 剩下的會是0跟單身狗 , 答案就是單身狗
 * 
 */
var singleNumber = function(nums) {
	// var res = 0;
	// for(let i =0 ;i<nums.length;i++){
	// 	res = res ^ nums[i];
	// }
	// return res;

	return nums.reduce((accu, item, index) => {
		return accu ^ item;
	}, 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
