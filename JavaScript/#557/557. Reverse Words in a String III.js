/**
 * @param {string} s
 * @return {string}
 */

// 依題意,
// 先將字串 s 拆分成陣列, 
// 再用 .map() 對每個 word 做倒轉處理,
// 之後再 join 成字串.

var reverseWords = function(s) {
	return s
		.split(' ')
		.map(function(item, index) {
			return reverseString(item);
		})
		.join(' ');
};
//參考： https://github.com/xTobu/LeetCode/tree/master/JavaScript/%23344
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

console.log(reverseWords("Let's take LeetCode contest"));