
# [617. Merge Two Binary Trees 合併兩個二元樹][title]

[title]: https://leetcode.com/problems/merge-two-binary-trees/description/

## ❀ Origin

### Problem

Given two binary trees and imagine that when you put one of them to cover the other,  
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree.

The merge rule is that if two nodes overlap,  
then sum node values up as the new value of the merged node.  
Otherwise,  
the NOT null node will be used as the node of new tree.

### Note

- The merging process must start from the root nodes of both trees.

### Example 1

```
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

---

## ❀ 翻譯

### 問題

給定兩個二元樹, 並且想像當你把一顆樹放到另一顆上時,
兩棵樹的某些節點會重覆, 其他則否.  

你需要將它們合併成一個新的二元樹.

合併的規則是如果兩個節點重疊了,  
則將兩個節點的值相加成為新節點的值.  
除此之外,  
不是 null 的節點將會被當做新二元樹的節點.

### 注意

- 合併的過程必須是從兩個二元樹的根節點開始.

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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	// 同樣的位置上如果沒重覆, 至少回傳一個節點
	if (!t1) return t2;
	if (!t2) return t1;

	// 建立一個新的 TreeNode, 其值為兩個樹的 val 相加
	var newBinaryTree = new TreeNode(t1.val + t2.val);

	// 開始遍歷每個節點, 賦予左子樹為一個新節點, 其值為兩個樹的左子樹的值相加
	newBinaryTree.left = mergeTrees(t1.left, t2.left);

	// 同上, 右子樹
	newBinaryTree.right = mergeTrees(t1.right, t2.right);

	return newBinaryTree;
};
```
