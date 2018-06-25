/**
 * @param {number} num
 * @return {number}
 */

/**
 * XOR 相同為零 不同為一
 * NOR 理論上也可以, 只是目前不曉得如何在JS使用 NOR
 */
var findComplement = function(num) {
	// 先取得目標數的二進制的長度
	var binaryLength = num.toString(2).length;

	// 使用 Math.pow() , 取得全為 1 的數, 2的n次方 -1
	var TheAllOneNum = Math.pow(2, binaryLength) - 1;

	// 與其執行 NOR
	return num ^ TheAllOneNum;
};
console.log(findComplement(9));
