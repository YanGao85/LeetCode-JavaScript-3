/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	//先組成 k 個字串為一組的陣列
	let arrResult = [];
	for (let i = 0; i < s.length; i += k) {
		arrResult.push(s.slice(i, i + k));
	}

	// 依題意 從位置 0 開始, 做之後 k 長度字串的倒轉, 其後每 2k 位置都要做一樣動作
	return arrResult
		.map(function(item, index) {
			if (index % 2 == 0) {
				item = reverseString(item);
			}
			return item;
		})
		.join('');
};

//倒轉字串 參考： https://github.com/xTobu/LeetCode/tree/master/JavaScript/%23344
var reverseString = function(s) {
	return s.split('').reverse().join('')
};

console.log(reverseStr('abcdefghijklmnopqrstuv', 3));
