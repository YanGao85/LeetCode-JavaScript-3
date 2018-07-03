/**
 * @param {string} s
 * @return {number}
 */
/**
 * LeetCode官方解答上最快的寫法, 感覺懂又不懂.
 *
 * 先以 i 為圓心算完後, 再以 i 和 i+1 的中心為圓心,
 * 這邊不太懂.
 *
 */
/**
 * 先以 i 為圓心, 往外擴展去判斷
 * 再以 i 和 i+1 的中心為圓心, 往外擴展去判斷
 * 
 * 應該是基數長度與偶數長度的關係 目前未全部搞懂
 */

var countSubstrings = function(s) {
	let cnt = 0;

	for (let i = 0; i < s.length; i++) {
		console.log('i', i);
		cnt += countPalindrome(s, i, i) + countPalindrome(s, i, i + 1);
	}
	return cnt;
};

// 用start, end當圓心去擴展, 判斷 str[start] === str[end] 是否一樣, 回傳回文子串的數量
function countPalindrome(str, start, end) {
	let count = 0;

	/**
	 * 起始位置 start 不能比 0 小
	 * 結束位置 end 不能大於字串 str 的長度
	 *  str[start] === str[end]
	 * 上面三點才滿足回文字串的條件
	 * 因為判斷東西多, 用 while 會比較好寫
	 *
	 */
	while (start >= 0 && end < str.length && str[start] === str[end]) {
		console.log('start, end', start, end);

		// 往左一個位置
		start--;
		// 往右一個位置
		end++;
		// 回文字串數量加一
		count++;

		//繼續尋找回文子串
	}
	return count;
}
console.log(countSubstrings('abcdcba'));
