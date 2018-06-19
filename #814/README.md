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
![Example 1](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png =450x125)

### Example 2
```
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]
```
![Example 2](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png =450x125)

### Example 3
```
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]
```
![Example 3](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png =450x125)
  
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
 1. 用 互斥或閘(XOR) 算出兩數的差異數的十進位值
 2. 用 while(){} 算出該數的二進位制有幾個 1 

```
```