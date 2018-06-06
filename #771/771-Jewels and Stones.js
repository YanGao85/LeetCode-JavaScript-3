/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {

	/* 依據 J(types of stones that are jewels) 建立一個新的 Set */
	const jewels = new Set([...J]); // Set(2) {"a", "A"}

	/* 依據 S(the stones you have) 建立一個新的 Array */
	const arrayS = S.split(''); // (7) ["a", "A", "A", "b", "b", "b", "b"]

	/* reduce */
	// accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
	// currentValue: 當前變數
	// currentIndex: 當前索引
	// array: 全部陣列

	/* 對 arrayS 跑 reduce,
       使用 Set 的 has(value), 判斷該值是否為Set的成員 */
	const count = arrayS.reduce(
		(accumulator, currentValue, currentIndex, array) => {
			return accumulator + jewels.has(currentValue);
		},
		0 // 傳入reduce accumulator 的初始化值為 0
	);

	return count;
};
