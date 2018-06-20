# 461. Hamming Distance

### Question 
We are given the head node `root` of a binary tree, where additionally every node's value is either a 0 or a 1.  
Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.  
(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)  

### Note  
 - The binary tree will have at most 100 nodes.
 - The value of each node will only be 0 or 1.

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
  
### 翻譯
#### Question
我們被給予一個二元樹的頭根節點, 另外每個節點的值只會 0 或是 1 .  
回傳一樣的樹, 但所有不包含 1 的子樹(在被給定的樹)都已經被移除的一樣那棵樹.  
(回想一下, 節點 X 的子樹是 X , 加上每一個節點都是 X 的後代) 

#### Note 
 - 該二元樹最多只有100個節點.
 - 每一個節點的值不是 0 就是 1 . 

### 備註
#### 程式怎麼跑 不記起來會忘記
 1. 用 遞迴 進到每一個節點
 2. 判斷是不是其 root.val 是不是 0 , 是的話就給予 null

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