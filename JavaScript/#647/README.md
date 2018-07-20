
# [647. Palindromic Substrings 回文子串][title]

[title]: https://leetcode.com/problems/palindromic-substrings/description/

## ❀ Origin

### Problem

Given a string, your task is to count how many palindromic substrings in this string.  
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

### Note

1.  The input string length won't exceed 1000.

### Example 1

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

### Example 2

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

---

## ❀ 翻譯

### 問題

給定一個字串, 你的任務是算出這個字串裡有幾個回文子串.  
具有不同起始位置和結束位置的子字串符會被計算成不同的子字串, 即使他們包含著相同的字元.

### 注意

1.  輸入字串的長度不會超過 1000.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
	let len = s.length;
	let result_count = 0;

	/**
	 * 用 substr(start, length)
	 * 把所有可能的字串找出來,
	 * 再用 isPalindrome 判斷是不是回文子串
	 */
	for (let length = 1; length <= s.length; length++) {
		for (let start = 0; start <= s.length - length; start++) {
			let newStr = s.substr(start, length);
			if (isPalindrome(newStr)) result_count++;
		}
	}
	return result_count;
};

/**
 * 判斷字串是不是回文子串
 * 用鏡面位置去判斷是不是對稱,
 * 跑完都一樣就回傳 true
 */
var isPalindrome = (str)=> {
	for (let i = 0; i <= str.length - i - 1; i++) {
		if (str[i] !== str[str.length - i - 1]) return false;
	}
    return true;

	// if(str !==str.split('').reverse().join('')){
    //     return false;
    // }
    // return true;
};
console.log(countSubstrings('abcba'));
```

### JavaScript II

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
/**
 * Manacher's Algorithm
 * 還沒搞懂 好難
 */
var countSubstrings = function(s) {
    s = preprocess(s);
    console.log(s);
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		let j = 0;
		while (j < s.length - i && i >= j && s[i + j] === s[i - j]) {
			//console.log(j);
			j++;
        }
        console.log('j/2: ', Math.trunc(j / 2));
        result += Math.trunc(j / 2);
        console.log(result);
	}
	return result;
};

var preprocess = function(s) {
	return '#' + s.split('').join('#') + '#';
};

console.log(countSubstrings('12212321'));
```

### JavaScript III

```JavaScript
/**
 * @param {string} s
 * @return {number}
 */
/**
 * LeetCode官方解答上最快的寫法, 感覺懂又不懂.
 *
 * 先以 i 為圓心算完後, 再以 i 和 i+1 的中心為圓心,
 * 這邊不太懂.
 *
 */
/**
 * 先以 i 為圓心, 往外擴展去判斷
 * 再以 i 和 i+1 的中心為圓心, 往外擴展去判斷
 *
 * 應該是基數長度與偶數長度的關係 目前未全部搞懂
 */

var countSubstrings = function(s) {
	let cnt = 0;

	for (let i = 0; i < s.length; i++) {
		console.log('i', i);
		cnt += countPalindrome(s, i, i) + countPalindrome(s, i, i + 1);
	}
	return cnt;
};

// 用start, end當圓心去擴展, 判斷 str[start] === str[end] 是否一樣, 回傳回文子串的數量
function countPalindrome(str, start, end) {
	let count = 0;

	/**
	 * 起始位置 start 不能比 0 小
	 * 結束位置 end 不能大於字串 str 的長度
	 *  str[start] === str[end]
	 * 上面三點才滿足回文字串的條件
	 * 因為判斷東西多, 用 while 會比較好寫
	 *
	 */
	while (start >= 0 && end < str.length && str[start] === str[end]) {
		console.log('start, end', start, end);

		// 往左一個位置
		start--;
		// 往右一個位置
		end++;
		// 回文字串數量加一
		count++;

		//繼續尋找回文子串
	}
	return count;
}
console.log(countSubstrings('abcdcba'));
```
