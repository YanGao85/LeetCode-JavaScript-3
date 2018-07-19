/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
	const arrResult = [];
	// let countRecurse = 0;
	function recurse(current = '', left = 0, right = 0) {
		// countRecurse++
		// console.log('countRecurse: ',countRecurse,'｜','current :', current, '｜', left, right);
		// 等長度組到了 n*2 (括號長度為二) 的時候, 即可推到 arrResult
		if (current.length === 2 * n) {
			arrResult.push(current);
			// console.log('== push and return ==');
			return;
		}

		if (left < n)
			// 追加 '(' , 並left + 1
			recurse(current + '(', left + 1, right);

		if (right < left)
			// 判斷完 left < n
			// 追加 ')' , 並left + 1
			recurse(current + ')', left, right + 1);

		// 回傳結果
		return arrResult;
	}
	
	// 執行遞迴
	// 回傳結果
	return recurse();
};
console.log(generateParenthesis(3));
