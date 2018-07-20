# [657. Judge Route Circle][title]

[title]: https://leetcode.com/problems/judge-route-circle/description/

## ❀ Origin

### Problem

Initially, there is a Robot at position (0, 0).  
Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character.  
The valid robot moves are R (Right), L (Left), U (Up) and D (down).  
The output should be true or false representing whether the robot makes a circle.

### Example

```
Input: "UD"
Output: true
```

### Example 2

```
Input: "LL"
Output: false
```

---

## ❀ 翻譯

### 問題

最初, 有個機器人在位置 (0, 0).
給他了一連串的動作之後, 判斷這機器人會不會繞一圈, 也就是回到原點.

動作的序列將會是字串, 每個字元代表一個動作.
有效的動作為 R (往右), L (往左), U (往上)和 D (往下).  
輸出結果必須是 ture 或是 false, 代表這機器人有沒有繞一圈.

---

## ❀ Solution

### JavaScript

```js
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  // 將 moves 用 split 成陣列
  var arr = moves.split("");

  // 如果該陣列為基數, 則一定不可能回原點, 直接回傳 false
  if (arr.length % 2 == 1) {
    return false;
  }

  // 假設起點為 (0, 0)
  // 定義出x,y為移動路徑
  var x = 0;
  var y = 0;
  arr.forEach(function(element) {
    switch (element) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  });
  //若座標為 (0, 0), 則回傳 true
  if (x == 0 && y == 0) return true;

  //不在原點, 回傳 false
  return false;
};
```
