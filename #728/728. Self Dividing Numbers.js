/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	const arrayResult = new Array();
	for (let i = left; i <= right; i++) {
		arrayResult.push(i);
	}

	/**
	 * Array.prototype.keys()
	 * keys() 方法會回傳一個包含陣列中的每一個索引之鍵（keys）
	 * var array1 = ['a', 'b', 'c'];
	 * var iterator = array1.keys();
	 * result [0, 1, 2]
	 *
	 * ...Array(1 + right - left)
	 * 結束 - 開始取數量, 因為要包含結束自己, 所以總數加一
	 *
	 * 總數對了後, 跑 reduce() ,
	 * 將每一個 currentValue (key) 再加上 left 並判斷後傳回 accumulator,
	 * 即為我們要找的陣列
	 */
	return [...Array(1 + right - left).keys()].reduce(function(
		accumulator,
		currentValue
	) {
		// 總數, 當前值 + 起始值
		let number = currentValue + left;
		
		// 用 for...in 去確認每個位數
		for (let i in number.toString()) {
			// 位數
			let digit = number.toString()[i];
			// 依題意, 要找出不包含零, 而且每個位數都可以整除自己的數
			// 故如果位數等於零, 或是相除有餘數, 便回傳原陣列.
			if (digit == 0 || number % digit != 0) {
				return accumulator;
			}
		}

		// 通過的數將 push 到 accumulator , 繼續往下執行 reduce
		accumulator.push(number);
		return accumulator;
	},
	[]);
};
console.log(selfDividingNumbers(1, 22));
