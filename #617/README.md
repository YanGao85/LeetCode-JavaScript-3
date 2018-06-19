# 617. Merge Two Binary Trees

### Question 
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

  
### 翻譯
#### Question
給定兩個二元樹, 並且想像當你把一顆樹放到另一顆上時, 
兩棵樹的某些節點會重覆, 其他則否.  
    
你需要將它們合併成一個新的二元樹.  
  
合併的規則是如果兩個節點重疊了,  
則將兩個節點的值相加成為新節點的值.  
除此之外,  
不是 null 的節點將會被當做新二元樹的節點.

#### Note 
 - 合併的過程必須是從兩個二元樹的根節點開始.

