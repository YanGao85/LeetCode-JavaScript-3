# [804. Unique Morse Code Words 獨特摩斯密碼字][title]
[title]:https://leetcode.com/problems/unique-morse-code-words/description/

## ❀ Origin

### Problem

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,  
as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

```javascript
[
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];
```

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.  
For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-").  
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

### Example

```
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
```

### Note

- The length of words will be at most 100.
- Each words[i] will have length in range [1, 12].
- words[i] will only consist of lowercase letters.

---

## ❀ 翻譯

### 問題

國際摩斯密碼定義了一種標準的編碼,  
每一個字母會對應到一連串的點點和破折號.  
如下: "a" 代表 ".-", "b" 代表 "-...", "c" 代表 "-.-.", 以此類推.

為方便起見, 完整 26 個英文字母的對應表如下:

```javascript
[
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];
```

現在, 收到一個字詞列表, 每個單字可以寫成每個字母的摩斯密碼連結.  
譬如, "cab" 可以寫做 "-.-.-....-", (即是 "-.-." + "-..." + ".-" 的串聯).  
我們將這樣子的串聯稱做單字轉換.

回傳所有單字可轉換成摩斯密碼的數量.

### 注意

- 字詞 words 的長度最多為 100
- 每個單字 words[i] 的長度的範圍為 [1, 12]
- 單字 words[i] 只包含著小寫字母

***

## ❀ Solution
### JavaScript
```JavaScript
/**
 * @param {string[]} words
 * @return {number}
 */

/* 字母 a~z 對應到的 Morse Code */
const LetterList = [
	'.-',
	'-...',
	'-.-.',
	'-..',
	'.',
	'..-.',
	'--.',
	'....',
	'..',
	'.---',
	'-.-',
	'.-..',
	'--',
	'-.',
	'---',
	'.--.',
	'--.-',
	'.-.',
	'...',
	'-',
	'..-',
	'...-',
	'.--',
	'-..-',
	'-.--',
	'--..',
];
var uniqueMorseRepresentations = function(words) {
	/* 對 words 跑 reduce, 建立預設結果為 obj */
	var objRes = words.reduce(function(res, val, index) {
		/* 欲組成該單字的摩斯密碼的字串 */
		let strMorse = '';

		/* 對單字的每個字跑for迴圈 */
		for (let i = 0; i < val.length; i++) {
			/* 取得該字母 val[i] 對應到 LetterList 的位置 
			   使用 charCodeAt() 以得到單字的 Unicode
			   因題目聲明單字必為小寫, 而a-z 為97-112
			   故減去 97 後則為其L etterList 上的對應位置 */
			let indexLetter = val[i].charCodeAt() - 97;

			/* 將其摩斯密碼組合 */
			strMorse += LetterList[indexLetter];
		}
		// 對 res 新增一個 properties, key = strMorse, val = true
		// 這樣下次有一樣的 strMorse 時, 便不會在新增一個properties
		res[strMorse] = true;

		return res;
	}, {}); // 初始化值為 {}
	/* 將 objRes 使用 Object.keys(), 取得其 property 的 array, 並將其長度回傳*/
	// (2) ["--...-.", "--...--."]
	return Object.keys(objRes).length;
};
```