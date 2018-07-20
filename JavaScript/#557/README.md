
# [557. Reverse Words in a String III 反轉字串裡的單字][title]

[title]: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

## ❀ Origin

### Problem

Given a string,  
you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Note

- In the string, each word is separated by single space and there will not be any extra space in the string.

### Example

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

---

## ❀ 翻譯

### 問題

給定一個字串,  
你必須倒轉每個單字裡的字母的順序, 同時保留空格和原始句子的順單字順序.

### 注意

- 在字串裡, 每個單字都會用一個空白來隔開, 而且單字裡不會存在額外的空白.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {string} s
 * @return {string}
 */

// 依題意,
// 先將字串 s 拆分成陣列,
// 再用 .map() 對每個 word 做倒轉處理,
// 之後再 join 成字串.

var reverseWords = function(s) {
	return s
		.split(' ')
		.map(function(item, index) {
			return reverseString(item);
		})
		.join(' ');
};
//參考： https://github.com/xTobu/LeetCode/tree/master/JavaScript/%23344
var reverseString = function(s) {
	return s.split('').reverse().join('')
};

console.log(reverseWords("Let's take LeetCode contest"));
```
