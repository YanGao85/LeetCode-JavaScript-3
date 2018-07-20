
# [763. Partition Labels 分割標籤][title]

[title]: https://leetcode.com/problems/partition-labels/description/

## ❀ Origin

### Problem

A string `S` of lowercase letters is given.  
We want to partition this string into as many parts as possible so that each letter appears in at most one part,  
and return a list of integers representing the size of these parts.

### Note

- `S` will have length in range `[1, 500]`.
- `S` will consist of lowercase letters (`'a'` to `'z'`) only.

### Example 1

```
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
```

---

## ❀ 翻譯

### 問題

給定一個小寫字母的字串 `S` .  
我們想要將此字串盡可能地分成多個部分, 以便每個字母最多只會重覆在一個部分,  
並回傳一個代表著每個部份的長度整數的陣列.

### 注意

- `S` 的長度會介於 `[1, 500]` .
- `S` 只會由小寫字母 (`'a'` to `'z'`) 來組成.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * @param {string} S
 * @return {number[]}
 */

let S = 'ababcbacadefegdehijhklij';

var partitionLabels = function(S) {
	// 結果陣列.
	let result = [];

	// 起始位
	let start = 0;

	// 目標位置
	let indexTarget = 0;

	// 遍歷字串所有字母
	for (let i = 0; i < S.length; i++) {
		// 得到目前字母在字串裡的最後一個位置
		let indexLast = S.lastIndexOf(S[i]);

		// 將目前找到的 indexLast 和目前的 indexTarget 做比較,
		// 將比較大的取代成目標位置 indexTarget
		// (取大, 因為要找字母只能在自己的組裡有重覆, 如果取小, 那後面還是有可能重覆)
		indexTarget = Math.max(indexTarget, indexLast);

		// 上面有刷新過目標位置 indexTarget,
		// 如果遍歷的位置到了目標位置, 就不用再往後其他字的最後位置 indexLast 了,
		// 代表前的 start 和 indexTarget 是我們要找的範圍.
		if (i == indexTarget) {
			// 因題意只需要字組的長度, 所以也不用 slice 出一個新的陣列, 直接計算長度就可以了.
			// 因為要的是長度, 不是距離, 所以要 +1 .
			result.push(indexTarget - start + 1);

			// 將 start 更新成目前位置的下一位, 等同於前面被截取掉後的第一位.
			start = i + 1;
		}
	}
	// 回傳結果
	return result;
};

console.log(partitionLabels(S));
```
