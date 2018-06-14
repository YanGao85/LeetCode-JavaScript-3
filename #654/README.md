# 654. Maximum Binary Tree

### Question 
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:  
  
 1. The root is the maximum number in the array.
 2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
 3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.    

Construct the maximum tree by the given array and output the root node of this tree.

### Example
```
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
```
### Note
 - The size of the given array will be in the range [1,1000].

  
### 翻譯
#### Question
在二維振列的網格中, 每一個 grid[i][j] 代表著一個在那裏的建築物的高度.  
我們允許增加任意數量欲增加高度的建築物, 任意的建築物增高量(數量會因為建築物而不同).  
高度 0 也被認為是一棟建築物.  

最後, 從 grid 的四個方向所看到的天際線, 即上下左右, 其必須與原本的 grid 的天際線相同.
一個城市的天際線是從遠處看過去時, 所有建築物所組成的矩形外部輪廓.  
看下面例子.  
  
請問每棟建築物可以增加的最大量的總和是?


#### Note 
 - grid 是二維陣列, 因此 grid 的長度和 grid[0] 的長度相等, 且範圍為 1 ~ 50 之間.  
 - 因此每一個值 grid[i][j] 的範圍在 0 ~ 100 之間.  
 - 每個在 grid[i][j] 的建築物都占據了整個網格單元, 也就是說每個建築物是的 1 x 1 x grid[i][j] 的直角角柱體.  