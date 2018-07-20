
# [104. Maximum Depth of Binary Tree 二元樹最大深度][title]

[title]: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

## ❀ Origin

### Problem

Given a binary tree, find its maximum depth.  
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Note

- A leaf is a node with no children.

### Example

```
Given binary tree [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
```

---

## ❀ 翻譯

### 問題

給定一個二元樹, 找出它的最大深度.  
最大深度是從根節點沿著最長的路徑往下到最遠的葉節點.

### 注意

- 葉子是沒有孩子的節點.

---

## ❀ Solution

### Idea

因為之前解過 #654、#814、#617，  
所以直覺用遞迴來解，  
但一開始忘記從深度 1 開始,  
後來有把結果 + 1 .

1.  用遞迴
2.  找出最左和最右深度

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
 * @return {number}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * 使用遞迴, 去算出左和右的最深身度
 */
var maxDepth = function(root) {
	// 如果沒有, 就回傳 0
	if (root == null) return 0;
	// 每次深度加一
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

### Execution

```
[3,9,20,null,null,15,7]
/////////////////////////////
1.
root.val = 3
root.left = 9
root.right = 10
/////////////////////////////
2. root -> left -> left
val = null
return 0

↓↓↓↓

2. root -> left -> right
val = null
return 0

↓↓↓↓

2. root -> left
return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
return 1 + 0 = 1

↓↓↓↓

2. root
return 1 + Math.max( 1, maxDepth(root.right));

/////////////////////////////

2.root -> right -> left
val = 15
left = null
right = null
return 1 + Math.max(maxDepth(null), maxDepth(null));
return 1 + 0 = 1

↓↓↓↓

2. root -> right -> right
val = 7
left = null
right = null
return 1 + Math.max(maxDepth(null), maxDepth(null));
return 1 + 0 = 1

↓↓↓↓

2. root -> right
return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
return 1 + 1 = 2

/////////////////////////////

3. root
return 1 + Math.max( 1, 2));
return 1 + 2 = 3
```
