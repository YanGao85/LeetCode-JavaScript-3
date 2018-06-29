# 136. Single Number

### Question 
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

  
### 翻譯
#### Question
給定一個二元樹, 找出它的最大深度.  
最大深度是從根節點沿著最長的路徑往下到最遠的葉節點.  

#### Note 
 - 葉子是沒有孩子的節點.


### 備註
#### 程式怎麼跑 不記起來會忘記    
因為之前解過 #654、#814、#617，  
所以直覺用遞迴來解，  
但一開始忘記從深度 1 開始,  
後來有把結果 + 1 .  

1. 用遞迴
2. 找出最左和最右深度
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
