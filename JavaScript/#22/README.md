# 22. Generate Parentheses 產生括號組

## ❀ Origin

### Question

Given _n_ pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Example

```
Input: n = 3
Output:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

---

## ❀ 翻譯

### 問題

給定 _n_ 對的括號, 編寫一個函數來產生所有格式正確的括號的組合.

---

## ❀ Solution

### JavaScript

```js
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
```

### Idea

-   _n_ 代表每個元素會有 _n_ 個 '(' 和 _n_ 個 ')'
-   建立一個字串 _current_ 來暫存還沒組合完成的括弧
-   _current_ 的長度等於 2 \* _n_ 時, 及代表正確括號, 即可推到結果陣列 _arrResult_
-   使用遞迴, 先判斷 _left_ 要小於 _n_
-   判斷 _right_ 小於 _left_ , 才能滿足括號規則
-   [Ref. soleil 阿璐](https://segmentfault.com/a/1190000013690046)


### Execution

```
countRecurse:  1 ｜ current :  ｜ 0 0
countRecurse:  2 ｜ current : ( ｜ 1 0
countRecurse:  3 ｜ current : (( ｜ 2 0
countRecurse:  4 ｜ current : ((( ｜ 3 0
countRecurse:  5 ｜ current : ((() ｜ 3 1
countRecurse:  6 ｜ current : ((()) ｜ 3 2
countRecurse:  7 ｜ current : ((())) ｜ 3 3
== push and return ==
// 跳到 #3 的 right + 1 = 1 判斷
===============================

// right = 0 + 1
// 遞迴先判斷 left 原則
countRecurse:  8 ｜ current : (() ｜ 2 1
countRecurse:  9 ｜ current : (()( ｜ 3 1
countRecurse:  10 ｜ current : (()() ｜ 3 2
countRecurse:  11 ｜ current : (()()) ｜ 3 3
== push and return ==
// 跳到 #3 的 right + 1 = 2 判斷
===============================

countRecurse:  12 ｜ current : (()) ｜ 2 2
countRecurse:  13 ｜ current : (())( ｜ 3 2
countRecurse:  14 ｜ current : (())() ｜ 3 3
== push and return ==
// 跳到 #2 的 right + 1 = 1 判斷
===============================

countRecurse:  15 ｜ current : () ｜ 1 1
countRecurse:  16 ｜ current : ()( ｜ 2 1
countRecurse:  17 ｜ current : ()(( ｜ 3 1
countRecurse:  18 ｜ current : ()(() ｜ 3 2
countRecurse:  19 ｜ current : ()(()) ｜ 3 3
== push and return ==
// 跳到 #16 的 right + 1 = 2 判斷
===============================

countRecurse:  20 ｜ current : ()() ｜ 2 2
countRecurse:  21 ｜ current : ()()( ｜ 3 2
countRecurse:  22 ｜ current : ()()() ｜ 3 3
== push and return ==
// 因為要滿足 right < left
// 故輸出結果

[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
```
