
# [814. Binary Tree Pruning 二元樹修剪][title]

[title]: https://leetcode.com/problems/binary-tree-pruning/description/

## ❀ Origin

### Problem

We are given the head node `root` of a binary tree, where additionally every node's value is either a 0 or a 1.  
Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.  
(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

### Example 1

```
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]

Explanation:
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.
```

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png" alt="Example 1" width="450px" height="125px"/>

### Example 2

```
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]
```

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png" alt="Example 2" width="450px" height="125px"/>

### Example 3

```
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]
```

<img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png" alt="Example 3" width="450px" height="125px"/>
### Note  
 - The binary tree will have at most 100 nodes.
 - The value of each node will only be 0 or 1.

---

## ❀ 翻譯

### 問題

我們被給予一個二元樹的頭根節點, 另外每個節點的值只會 0 或是 1 .  
回傳一樣的樹, 但所有不包含 1 的子樹(在被給定的樹)都已經被移除的一樣那棵樹.  
(回想一下, 節點 X 的子樹是 X , 加上每一個節點都是 X 的後代)

### 注意

- 該二元樹最多只有 100 個節點.
- 每一個節點的值不是 0 就是 1 .

---

## ❀ Solution

### Idea

1.  用 遞迴 進到每一個節點
2.  判斷是不是其 root.val 是不是 0 , 是的話就給予 null

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

// 用遞迴去解,
// 類似倒過來想的 #654 (https://github.com/xTobu/LeetCode/tree/master/%23654)

var pruneTree = function(root) {
	// 如果傳入值 root 只會是 TreeNode ,
	// 所以此只判斷 root 是否為 null,
	// 若是 便直接回傳.
	if (!root) return root;

	// 對傳入值 root 的 left 要賦予一個新的 TreeNode ,
	// 而其 root 必須是目前傳入值的 root.left 的 val.
	root.left = pruneTree(root.left);

	// 同上
	root.right = pruneTree(root.right);

	// 因為前三行程式 ,
	// 所以會跑這邊的話, 代表至少到了該二元樹的最左邊的左子樹
	// (因為第二或三行的傳入值是 null, 而在他的 pruneTree 的第一行 root 是 null 便回傳了)
	// ===========================
	// 若 root.left === null && root.right === null , 代表該 root是最下面的了,
	// 如果 root.val === 0 , 則依題意, 刪除此節點 (賦予 null)
	// 如果 root.val 不等於  0 ,那一定是 1 , 則回傳此 root.
	return root.left === null && root.right === null && root.val === 0
		? null
		: root;
};
```

### Execution

```
Input: [1,0,1,0,0,0,1]

               1
            /     \
           0       1
         /   \    /  \
        0     0  0    1


1.
root.val = 1
root.left = new TreeNode(0)
root.right = new TreeNode(1)
               1
            /     \
           0       1


2. left
root.val = 0
root.left = new TreeNode(0)
root.right = new TreeNode(0)
               1
            /     \
           0       1
        /     \
       0       0


3. left left
root.val = 0
root.left = new TreeNode(null)
root.right = new TreeNode(null)
                     1
                  /     \
                 0       1
              /     \
             0       0
          /     \
       null    null


4. left right
root.val = 0
root.left = new TreeNode(null)
root.right = new TreeNode(null)
                     1
                  /     \
                 0       1
              /     \
             0       0
          /    \    /  \
       null   null null null

5. left left left

root == null
return null


6. left left right

root == null
return null


7. left right left

root == null
return null


8. left right right

root == null
return null


9. 於是 left left

root.left === null && root.right === null && root.val === 0
return null

                        1
                    /      \
                  0          1
              /      \
            null       0
          /    \     /    \
       null   null  null  null


9. 於是 left right

root.left === null && root.right === null && root.val === 0
return null

                        1
                    /      \
                  0          1
              /      \
            null      null
          /    \     /    \
       null   null  null  null


9. 於是 left

root.left === null && root.right === null && root.val === 0
return null

                        1
                    /      \
                  null       1
              /      \
            null      null
          /    \     /    \
       null   null  null  null


10. 以此類推
```
