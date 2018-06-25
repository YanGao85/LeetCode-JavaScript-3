/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	// 找出所有目標字 C 的位置
	var arrIndexC = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === C) {
			arrIndexC.push(i);
		}
	}

	// 結果陣列
	var arrReult = [];

	// 先從 arrIndexC 的第 0 個位置開始找
	var nowC = 0;

	for (let i = 0; i < S.length; i++) {
		arrReult.push(
			// 取決對值 在傳入較小的那個
			Math.min(
				Math.abs(detect(arrIndexC[nowC]) - i),
				Math.abs(detect(arrIndexC[nowC - 1]) - i)
			)
		);

		// 若目前遍歷到的位置, 已經超過暫存的 nowC , 將 nowC + 1
		if (i >= detect(arrIndexC[nowC])) nowC++;
	}
	return arrReult;
};
// 如果遇到 undefined , 傳入無限大
function detect(c) {
	return c !== undefined ? c : Infinity;
}
console.log(shortestToChar('loveleetcode', 'e'));
