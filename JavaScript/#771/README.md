# 771. Jewels and Stones 珠寶與石頭

## ❀ Origin

### Problem
You're given strings J representing the types of stones that are jewels,  
and S representing the stones you have. Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.  
  
The letters in J are guaranteed distinct, and all characters in J and S are letters.  
Letters are case sensitive, so "a" is considered a different type of stone from "A".

### Example
```
Input: J = "aA", S = "aAAbbbb"
Output: 3
```
### Example 2
```
Input: J = "z", S = "ZZ"
Output: 0
```

***

## ❀ 翻譯 
### 問題 
有一字串 J 代表寶石的種類, 字串 S 代表你擁有的石頭.  
字串 S 的每一個字元都代表著你有的一個那種石頭.  
你想要知道你的石頭裡有幾個是寶石.  
  
字串 J 的每個字母都保證不同, 而且 J 與 S 的每個字元都保證是字母.  
字母有區分大小寫, 所以 "a" 被認定為與 "A" 是不同類型的石頭.

***
## ❀ Solution

### JavaScript

```js
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {

	/* 依據 J(types of stones that are jewels) 建立一個新的 Set */
	const setJ = new Set([...J]); // Set(2) {"a", "A"}

	/* 依據 S(the stones you have) 建立一個新的 Array */
	const arrayS = S.split(''); // (7) ["a", "A", "A", "b", "b", "b", "b"]

	/* reduce */
	// accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
	// currentValue: 當前變數
	// currentIndex: 當前索引
	// array: 全部陣列

	/* 對 arrayS 跑 reduce,
       使用 Set 的 has(value), 判斷該值是否為Set的成員 */
	const count = arrayS.reduce(
		(accumulator, currentValue, currentIndex, array) => {
			return accumulator + setJ.has(currentValue);
		},
		0 // 傳入reduce accumulator 的初始化值為 0
	);

	return count;
};

```