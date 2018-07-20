# [338. Counting Bits 計算位元][title]

[title]: https://leetcode.com/problems/counting-bits/description/

## ❀ Origin

### Problem

Given a non negative integer number **num**.  
For every numbers **i** in the range **0 ≤ i ≤ num** calculate the number of 1's in their binary representation and return them as an array.

### Follow up

- It is very easy to come up with a solution with run time **O(n\*sizeof(integer))**. But can you do it in linear time **O(n)** /possibly in a single pass?
- Space complexity should be **O(n)**.
- Can you do it like a boss? Do it without using any builtin function like **\_\_builtin_popcount** in c++ or in any other language.

### Example

```
For num = 5 you should return [0,1,1,2,1,2].
```

---

## ❀ 翻譯

### 問題

給定一個非負整數 **num**.  
對於每個在 **0 ≤ i ≤ num** 的數字 **i** ,計算它們的二進制表示裡 1 的數量, 並以陣列回傳.

### 進一步思考

- 這很容易想到運行時間是 **O(n\*sizeof(integer))** 的解法. 但你有辦法用線性時間 **O(n)** 的算法做一趟完成嗎?
- 空間複雜度應為 **O(n)**.
- 你有辦法做得像個老大? 不要使用如 c++ 裡的內建函數如 **\_\_builtin_popcount** , 或其他語言裡的.

---

## ❀ Solution

### JavaScript

```JavaScript
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
```
