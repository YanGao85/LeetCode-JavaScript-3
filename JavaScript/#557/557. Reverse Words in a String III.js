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
	return s.split('').reverse().join('')
};

console.log(reverseWords("Let's take LeetCode contest"));