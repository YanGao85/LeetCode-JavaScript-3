
# [821. Shortest Distance to a Character 與字元的最短距離][title]

[title]: https://leetcode.com/problems/shortest-distance-to-a-character/description/

## ❀ Origin

### Problem

Given a string `S` and a character `C`,  
return an array of integers representing the shortest distance from the character `C` in the string.

### Example 1

```
Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```

### Note

1.  `S` string length is in `[1, 10000]`.
2.  `C` is a single character, and guaranteed to be in string `S`.
3.  All letters in `S` and `C` are lowercase.

---

## ❀ 翻譯

### 問題

給定一個字串 `S`, 一個字符 `C`,  
回傳字符 `C` 在字串裡代表的最短距離的數字字串.

### 注意

1.  字串 `S` 的長度在 `[1, 10000]` 之間.
2.  `C` 是單一字符, 而且保證會出現在字串 `S` 裡面.
3.  所有字串 `S` 和字符 `C`都會是小寫字母.

---

## ❀ Solution

### JavaScript

```JavaScript
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
```
