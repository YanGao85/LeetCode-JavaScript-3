/**
 * @param {number[][]} grid
 * @return {number}
 */
var grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];
var maxIncreaseKeepingSkyline = function(grid) {
	/** 取得列的數量 */
	var lengthRow = grid.length;

	/** 取得行的數量 */
	var lengthCol = grid[0].length;

	/** 因為之後會用 Math.max(a, b) 來比較大小
	 *  故存放行列最大值的陣列必須先擺 0 進去.
	 *  ( 因應題目, 從前後左右所看過去的大樓天際線高度必須是不變的 ,
	 *    故必須取得 Row 和 Col 的最大值)
	 */
	/** 列方向的天際線最大值 */
	var maxRow = Array(lengthRow).fill(0);

	/** 行方向的天際線最大值 */
	var maxCol = Array(lengthCol).fill(0);

	/** for 迴圈每一個 Row  */
	for (var indexRow = 0; indexRow < lengthRow; indexRow++) {
		/** 定義一個 Row, 暫存此二維陣列的第 indexRow 個列*/
		let Row = grid[indexRow];
		/** for 迴圈每一個 Row 的每一個值, 數量為行的數量 lengthCol */
		for (var indexCol = 0; indexCol < lengthCol; indexCol++) {
			/** 定義一個 val, 暫存每一個值 */
			let val = Row[indexCol];

			/** 計算 maxRow 的過程
			 *  Row 迴圈在外, 所以 indexRow 固定, 依照 Col 的數量跑迴圈,
			 *  跟 每一個的值 val 做比較.
			 *  抓出 第 indexRow 的 Row 的最大值.
			 */
			maxRow[indexRow] = Math.max(maxRow[indexRow], val);

			/** 計算 maxCol 的過程
			 *  maxCol 的 indexCol 固定, 跟 每一個的值 val 做比較.
			 *  抓出該 indexCol 在 每一個 Row 的相同位置的最大值.
			 */
			maxCol[indexCol] = Math.max(maxCol[indexCol], val);
		}
    }
    // 最高行與最高列, 與每一個大樓至少到的高度
    // __|_9__4__8__7__
	// 8 | 8, 4, 8, 7
	// 7 | 7, 4, 7, 7
	// 9 | 9, 4, 8, 7
	// 3 | 3, 3, 3, 3

	/** 初始化總和 */
	let sum = 0;
	
	/** 因為要總共要增加樓層高度的總和, 因此再跑一次遍歷的迴圈 */
	for (var indexRow = 0; indexRow < lengthRow; indexRow++) {
		for (var indexCol = 0; indexCol < lengthCol; indexCol++) {
			/** 每個位置的原始值 */
			let val = grid[indexRow][indexCol];

			/** 題目要求, 從各方向看過去的天際線的高度必須不變,
			 *  因此, 每一棟樓調整的值是該棟大樓的列與行的最小值
			 *  (因為要看的是天際線, 且必須和原本天際線一樣形狀, 故只可取最小值, 同方向只會看到最高的),
			 *  假設我們已經讓其增加到其所在行的最高天際線和其所在列的最高天際線的最小值,
			 *  再將該值與原本矩陣位置的值相減, 變可得出該位置需增加多少.
			 */

			/** 該大樓至少增加到的高度,
			 *  最高行與最高列的最小值
			 */
			let new_val = Math.min(maxRow[indexRow], maxCol[indexCol]);

			sum += new_val - val;
		}
	}
	return sum;
};