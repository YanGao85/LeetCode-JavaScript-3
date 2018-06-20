/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

/**
 * 題目為計算兩數間的 Hamming distance ,
 * 漢明距離是說把欲比對的數字轉成都二進制,
 * 在依序相同位置比對是否相異, 總數即為漢明距離.
 * exp:
 *  5   (0 1 0 1)
 * 10   (1 0 1 0)
 *       ↑ ↑ ↑ ↑
 * 差異數：4
 */
/**
 * 因此先用 ^ = 互斥或閘(XOR) 算出兩數的差異數的十進位值
 * exp:
 * 5 ^ 10 = 15
 *
 *  5   (0 1 0 1)
 * 10   (1 0 1 0)
 *       ↑ ↑ ↑ ↑
 * --------------
 * 15   (1 1 1 1)
 *
 *
 * 在對其值跑 while(){} ,
 *
 */
var hammingDistance = function(x, y) {
	// 紀錄差異總數用
	var count = 0;

	// 用 XOR , 算出兩數的差異數的十進位值 n
	var n = x ^ y;

	// 以其值執行 while(){}  如果 n = 0 , 直接 false 跳出迴圈
	while (n) {
		// 進來一次的等於有一個 1 , count 加一
		++count;

		// 如果進來一次了, n 要換成別的數字
		// n 與 (n - 1) 做及閘 AND ,
		// 因為每次的 -1 在二進制數字都會減少一個 1 位元 bit
		// 數值可能會有兩種狀況, 最右邊 bit 是 1 代表奇數， 0 代表偶數
		// 就像 [xxxx10 … 0] - 1 = [xxxx01 … 1]
		// AND 只有都為 1 才會為 1, 所以每運算一次相乘，就會少掉一個 1, count 便加一

		n = n & (n - 1);
	}
	return count;
};

console.log(hammingDistance(5, 10));
