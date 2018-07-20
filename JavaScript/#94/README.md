
# [94. Binary Tree Inorder Traversal 二元樹中序遍歷][title]

[title]: https://leetcode.com/problems/array-partition-i/description/

> 前中後序遍歷，參考：https://www.jianshu.com/p/456af5480cee
> 使用堆疊的方式做二元樹遍歷

## ❀ Origin

### Problem

Given a binary tree, return the _inorder_ traversal of its nodes' values.

### Example

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

### Follow up

Recursive solution is trivial, could you do it iteratively?

---

## ❀ 翻譯

### 問題

給定一個二元樹, 回傳其中序遍歷的節點的值.

### 後續

遞迴的解法並沒有什麼, 你能用迭代帶來處理嗎?

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
 * @return {number[]}
 */

// 二元樹迭代遍歷, 搭配 stack 堆疊
// 參考：https://www.jianshu.com/p/456af5480cee
var inorderTraversal = function(root) {
	let result = [];
	let stack = [];
	// 判斷root樹是否為 null, 或是 stack 的長度大於 0
	while (root !== null || stack.length > 0) {
		if (root) {
			/**
			 * 如果該樹 root 不是空值,
			 * 便將 root 推入 stack ,
			 * 將原本的 root 賦值 root.left,
			 * 繼續 while
			 */
			stack.push(root);
			root = root.left;
		} else {
			/**
			 * 如果進來這裡,
			 * 代表 root 沒有值,但stack.length > 0
			 * 也就是說這裡是最左邊
			 * 於是用 root = stack.pop();
			 * 將 root 改成 stack 的最後一個元素, 並將 stack 的最後一個元素刪除
			 * 之後將當下 root 值推到結果陣列 result , 即為中序遍歷的左子樹優先原則
			 * 推完 result.push(root.val); 後
			 * 再將 root = root.right;
			 * 繼續 while
			 * 繼續 從左子樹開始找
			 */
			root = stack.pop();
			result.push(root.val);
			root = root.right;
		}
	}
	return result;
};
```

### JavaScript II

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
 * @return {number[]}
 */

/**
 * 遞迴解法
 * 最後回傳 result
 *
 * 中序遍歷,
 * 因此以左子樹為優先
 */
var inorderTraversal = function(root) {
	var result = [];

	function inOrder(node) {
		if (node) {
			inOrder(node.left);
			result.push(node.val);
			inOrder(node.right);
		}
	}
	inOrder(root);
	return result;
};
```
