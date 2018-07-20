
# [226. Invert Binary Tree 反轉二元樹][title]

[title]: https://leetcode.com/problems/invert-binary-tree/description/

## ❀ Origin

### Problem

Invert a binary tree.

### Example

```
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

### Trivia

This problem was inspired by this original tweet by Max Howell:

> Google:  
> 90% of our engineers use the software you wrote (Homebrew),  
> but you can’t invert a binary tree on a whiteboard so f\*\*\* off.

---

## ❀ 翻譯

### 問題

反轉一個二元樹.

### 細故

此問題的發想源自這個 Max Howell 的 tweet :

> Google:  
> 我們 90% 的工程師都使用你寫的軟體 (Homebrew),  
> 但你卻沒有辦法在白板上反轉二元樹, 所以 f\*\*\* off.

---

## ❀ Solution

### JavaScript

```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

/**
 * 反轉二元樹
 */
/**
 * 和以前遍歷二元樹的方式一樣, 用遞迴.
 * 反轉的意思是 左 -> 右 , 右 -> 左 .
 *
 * 解題思路是判斷當前 root 是否為 null,
 * 如果是, 就回傳 null.
 * 如果不是, 變開始反轉.
 * 建立一個 child 的子節點,
 * 再將 child 的左右子樹做 invertTree 的遞迴後互換,
 * 最後回傳 child .
 *
 * ( 也可以只建立一個 tempLeft ,
 *   之後再將他做 invertTree 遞迴後放入 child.right ,
 *   但我喜歡這樣, 對我閱讀上更直覺一些 )
 */
var invertTree = function(root) {
	if (root !== null) {
		let child = new TreeNode(root.val);
		child.left = invertTree(root.right);
		child.right = invertTree(root.left);
		return child;
	}
	return null;
};

// console.log(invertTree(tree));
```
