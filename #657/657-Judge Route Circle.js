/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	// 將 moves 用 split 成陣列
	var arr = moves.split('');

	// 如果該陣列為基數, 則一定不可能回原點, 直接回傳 false
	if (arr.length % 2 == 1) {
		return false;
	}

	// 假設起點為 (0, 0)
	// 定義出x,y為移動路徑
	var x = 0;
	var y = 0;
	arr.forEach(function(element) {
		switch (element) {
			case 'U':
				y++;
				break;
			case 'D':
				y--;
				break;
			case 'R':
				x++;
				break;
			case 'L':
				x--;
				break;
		}
	});
	//若座標為 (0, 0), 則回傳 true
	if (x == 0 && y == 0) return true;

	//不在原點, 回傳 false
	return false;
};
