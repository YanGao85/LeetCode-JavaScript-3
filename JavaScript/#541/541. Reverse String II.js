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
	var top = '';
	var mid = '';
	var bottom = '';
	s.length % 2 == 0 ? (mid = '') : (mid = s[Math.floor(s.length / 2)]);

	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		top = top + s[s.length - 1 - i];
		bottom = s[i] + bottom;
	}
	return top + mid + bottom;
};

console.log(reverseStr('abcdefghijklmnopqrstuv', 3));
