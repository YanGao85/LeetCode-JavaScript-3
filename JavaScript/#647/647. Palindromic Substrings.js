/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
	let len = s.length;
	let result_count = 0;

	/**
	 * 用 substr(start, length)
	 * 把所有可能的字串找出來,
	 * 再用 isPalindrome 判斷是不是回文子串
	 */
	for (let length = 1; length <= s.length; length++) {
		for (let start = 0; start <= s.length - length; start++) {
			let newStr = s.substr(start, length);
			if (isPalindrome(newStr)) result_count++;
		}
	}
	return result_count;
};

/**
 * 判斷字串是不是回文子串
 * 用鏡面位置去判斷是不是對稱,
 * 跑完都一樣就回傳 true
 */
var isPalindrome = function(str) {
	for (let i = 0; i <= str.length - i - 1; i++) {
		if (str[i] !== str[str.length - i - 1]) return false;
	}
	return true;
};
console.log(countSubstrings('abcba'));
