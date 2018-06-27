/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/**
 * 想出這解法的大神真的很膜拜,
 * 一直再想該怎麼去判斷每個數的之前與之後,
 * 但如果確定題目給的陣列, 一定能排出正確排序,
 * 那解法會清澈很多.
 *
 * 大神的解法是先整理出依 h 的降幕排序,
 * 若 h 相等, 則比較 k 的大小, 小的排前面
 * 因此可整理出,
 *
 *  [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
 * ==================================================
 *  [[7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]]
 * 的陣列.
 *
 * 之後遍歷每個資料,
 * 搭配 array.splice(start, deleteCount, item, item,...)
 * // 開始位置, 刪除數量, 加入的item
 * // months = ['Jan', 'March', 'April', 'June'];
 * // months.splice(1, 1, 'Feb');
 * // ["Jan", "Feb", "April", "June"]
 *
 * 重點,
 * 因為陣列已經整理好身高由大到小, 且 k 值保證正確
 * 意思是說, 遍歷的每個值, 只要去判斷 k 知道前面有 k 個更高或一樣高的人,
 * 那在新建的那個陣列, 只要將當前值直接填入到位置 k 就好,
 * 因為是從大開始遍歷到小,
 * 也不用去想該值之外的人會如何,
 * 依題目 k 絕對合理, 那照著 k 給的位置排下去, 就一定正確.
 *
 * 超強的 完全沒想過  豁然開朗.
 *
 * EXP:
 * 
 * [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ].reduce() 結果如下
 *
 * start:  0   item:  [ 7, 0 ]   result:  []
 * start:  1   item:  [ 7, 1 ]   result:  [ [ 7, 0 ] ]
 * start:  1   item:  [ 6, 1 ]   result:  [ [ 7, 0 ], [ 7, 1 ] ]
 * start:  0   item:  [ 5, 0 ]   result:  [ [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
 * start:  2   item:  [ 5, 2 ]   result:  [ [ 5, 0 ], [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
 * start:  4   item:  [ 4, 4 ]   result:  [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 1 ] ]
 *
 *
 */
var reconstructQueue = function(people) {
	var result = [];

	/**
	 * 整理出依 h 的降幕排序, 若相等(b[0] - a[0] = 0), 則比對 k 的值小的前面, 作升幕,
	 */
	// people.sort(function(a, b) {
	// 	return b[0] - a[0] || a[1] - b[1];
	// });
	people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

	return people.reduce(function(accumulator, currentValue, currentIndex) {
		/**
		 * 對 accumulator 擺入 currentValue
		 * 位置則是其 k 值
		 * 解釋如上
		 */
		accumulator.splice(currentValue[1], 0, currentValue);
		// console.log(
		// 	'start: ',
		// 	currentValue[1],
		// 	'  item: ',
		// 	currentValue,
		// 	'  result: ',
		// 	accumulator
		// );
		return accumulator;
	}, []);
};

var data = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(data));
