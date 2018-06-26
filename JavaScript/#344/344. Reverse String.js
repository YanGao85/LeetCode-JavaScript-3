/**
 * @param {string} s
 * @return {string}
 */
// var reverseString = function(s) {
// 	// 建立頭中尾的部分
// 	var top = '';
// 	var mid = '';
// 	var bottom = '';

// 	// 如果字串長度為奇數, 傳入中間的字符當作 mid
// 	s.length % 2 == 0 ? (mid = '') : (mid = s[Math.floor(s.length / 2)]);

// 	// 使用頭尾互換的方式填入 迴圈少跑一半
// 	/**
// 	 *  h e l l o
// 	 * ===========
// 	 *  0 1 2 3 4
// 	 *  0       4
// 	 *    1   3
// 	 * mid = s[2]
// 	 * top = s[4] + s[3]
// 	 * bottom = s[1] + s[0]
// 	 *
// 	 */
// 	for (let i = 0; i < Math.floor(s.length / 2); i++) {
// 		// 最初和最鏡面對應的值交換
// 		top = top + s[s.length - 1 - i];
// 		bottom = s[i] + bottom;
// 	}
// 	return top + mid + bottom;
// };

// 原本以為一開始的for迴圈跑一半的方式會比較快,
// 但原生的 split('') 分成陣列, 
// 在用 reverse() 對陣列反轉, 
// 之後用 join('') 將陣列組合成字串. 
// 實測比較快, 快大概 30~40% 的時間 
var reverseString = function(s) {
    return s.split('').reverse().join('')
};


console.log(reverseString('abcde'));
