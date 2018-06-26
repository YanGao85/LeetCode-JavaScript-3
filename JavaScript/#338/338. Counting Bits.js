/**
 * @param {number} num
 * @return {number[]}
 */
let num = 17;

// 第一種解法 O(n*sizeof(integer)).
// （我只想出這種廢解法，下面兩種是網路上的大神前輩們的方式）
// Follow up 說不要這樣寫
// var countBits = function(num) {
// 	// 0 ≤ i ≤ num
// 	// 0 一定沒有 1, 所以第一個直接填入 0
// 	var arrayResult = [0];

// 	// for 迴圈從 1 開始, 直到指定數字
// 	for (let i = 1; i <= num; i++) {
// 		// reg
// 		// g 修飾符用於執行全局匹配（查找所有匹配而非在找到第一個匹配後停止）。
// 		// 先將數字轉為二進制, 在去掉所有的 0 , 傳入長度
// 		arrayResult.push(i.toString(2).replace(/0/g, '').length);
// 		// console.log();
// 	}
// 	return arrayResult;
// };
//////////////////////////////////////////////////////////////////////////
/**
 * 規律
 */
//i     bin    '1'   Math.floor(i/2)
// 0    0000    0     0
// --------------------------
// 1    0001    1     0
// 2    0010    1     1
// --------------------------
// 3    0011    2     1
// 4    0100    1     2
// --------------------------
// 5    0101    2     2
// 6    0110    2     3
// --------------------------
// 7    0111    3     3
// 8    1000    1     4
// --------------------------
// 9    1001    2     4
// 10   1010    2     5
// --------------------------
// 11   1011    3     5
// 12   1100    2     6
// --------------------------
// 13   1101    3     6
// 14   1110    3     7

/**
 * （  (i & 1) , i 偶數時為 0 , 奇數時為 1 ）
 * 從 1 開始,
 * 遇到奇數時, 其 1 的個數等於該數除以 2 取整數的數字的二進制的 1 的個數再加 1
 * 遇到偶數時, 其 1 的個數等於該數除以 2 取整數的數字的二進制的 1 的個數
 * 網路上學習的, 感謝大神前輩的文章指點
 */
// var countBits = function(num) {
// 	var arrayResult = [0];
// 	for (let i = 1; i <= num; i++) {
// 		arrayResult.push(arrayResult[Math.floor(i / 2)] + (i & 1));
// 	}
// 	return arrayResult;
// };
//////////////////////////////////////////////////////////////////////////
//i     bin    '1'  i&(i-1)
// 0    0000    0
// --------------------------
// 1    0001    1    0000 0
// --------------------------
// 2    0010    1    0000 0
// 3    0011    2    0010 2
// --------------------------
// 4    0100    1    0000 0
// 5    0101    2    0100 4
// 6    0110    2    0100 4
// 7    0111    3    0110 6
// --------------------------
// 8    1000    1    0000 0
// 9    1001    2    1000 8
// 10   1010    2    1000 8
// 11   1011    3    1010 10
// 12   1100    2    1000 8
// 13   1101    3    1100 12
// 14   1110    3    1100 12
// 15   1111    4    1110 14
/**
 * 利用了 i & ( i-1 ), 這原本是用來判斷是不是 2 的指數 (若等於 0 ,即為 2 的指數)
 * 對應結果如上
 * 可以發現, 每個 i 的二進制的 1 的個數, 等於其 i&(i-1) 的對應值 +1
 * 例如 15 的二進制為 1111, i&(i-1) = 14 , 14 的 1 的個數 = 3 , 而 15 的 1 的個數 = 3 + 1 = 4
 * 可以發現這規律的大神根本是天才 太強了.
 */
var countBits = function(num) {
	var arrayResult = [0];
	for (let i = 1; i <= num; i++) {
		arrayResult[i] = arrayResult[i & (i - 1)] + 1;
	}
	return arrayResult;
};

console.log(countBits(num));