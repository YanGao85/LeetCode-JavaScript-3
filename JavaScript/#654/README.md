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
給定一個不重複的整數陣列, 一個以此陣列建立的最大二元樹的定義如下:  
   
  1. 根節點為其陣列中的最大值  
  2. 左子樹是得出的最大值的左邊範圍所建構出的最大二元樹  
  3. 右子樹是得出的最大值的右邊範圍所建構出的最大二元樹  
  
使用給定的陣列建構出最大二元樹, 並輸出該樹的根節點
#### Note 
 - 給定陣列的長度範圍為 1 ~ 1000 . 

### 備註
#### 程式怎麼跑 不記起來會忘記
 1. 建立抓最大值的 function
 2. 建立產生最大二元樹的 function
 3. 對其執行遞迴

```javascript
[0] root
arrayTarget = [3,2,1,6,0,5]
begin = 0
end = 5
indexMax = 3
root.val = nums[3] = 6
root.left = new root(nums, begin, indexMax-1) = new root(nums, 0, 2)
root.right = new root(nums, indexMax+1, end) = new root(nums, 4, 5)

      6

//////////////////////////////////////////
[1] left
arrayTarget = [3,2,1]
begin = 0
end = 2
indexMax = 0
root.val = nums[0] = 3
root.left = new root(nums, begin, indexMax-1) = new root(nums, 0, -1)
root.right = new root(nums, indexMax+1, end) = new root(nums, 1, 2)

      6
    /   
   3     

//////////////////////////////////////////
[2] right
arrayTarget = [0,5]
begin = 4
end = 5
indexMax = 5
root.val = nums[5] = 5
root.left = new root(nums, begin, indexMax-1) = new root(nums, 4, 4)
root.right = new root(nums, indexMax+1, end) = new root(nums, 6, 5)

      6
    /   \
   3     5

//////////////////////////////////////////
[3] left left
begin = 0
end = -1
begin > end 
return null

          6
        /   \
      3       5
    /  
 null

//////////////////////////////////////////
[4] left righ
arrayTarget = [2,1]
begin = 1
end = 2
indexMax = 1
root.val = nums[1] = 2
root.left = new root(nums, begin, indexMax-1) = new root(nums, 1, 0)
root.right = new root(nums, indexMax+1, end) = new root(nums, 2, 2)

          6
        /   \
      3       5
    /   \
 null    2

//////////////////////////////////////////
[5] righ left 
arrayTarget = [0]
begin = 4
end = 4
indexMax = 4
root.val = nums[4] = 0
root.left = new root(nums, begin, indexMax-1) = new root(nums, 4, 3)
root.right = new root(nums, indexMax+1, end) = new root(nums, 5, 4)

          6
        /    \
      3        5
    /   \     /
 null    2   0

//////////////////////////////////////////
[6] righ right 
begin = 6
end = 5
begin > end 
return null

          6
        /    \
      3        5
    /   \     / \
 null    2   0   null

//////////////////////////////////////////
[x] left left left 

left left = null

//////////////////////////////////////////
[x] left left right 

left left = null

//////////////////////////////////////////
[7] left right left 
begin = 1
end = 0
begin > end 
return null


               6
            /     \
          3        5
        /   \     /  \
     null    2   0   null
           / 
         null

//////////////////////////////////////////
[8] left right right 
arrayTarget = [1]
begin = 2
end = 2
indexMax = 2
root.val = nums[2] = 1
root.left = new root(nums, begin, indexMax-1) = new root(nums, 2, 1)
root.right = new root(nums, indexMax+1, end) = new root(nums, 3, 2)


               6
            /     \
          3        5
        /   \     /  \
     null    2   0   null
           /   \
         null   1

//////////////////////////////////////////
[9] right left left 
begin = 4
end = 3
begin > end 
return null


                   6
            /            \
          3               5
        /   \            /  \
     null    2          0   null
           /   \      /
         null   1   null

//////////////////////////////////////////
[10] right left right 
begin = 5
end = 4
begin > end 
return null


                   6
            /            \
          3               5
        /   \            /  \
     null    2          0   null
           /   \      /   \
         null   1   null  null

//////////////////////////////////////////
[x]  right right left 

right right = null

//////////////////////////////////////////
[x]  right right right 

right right = null

```

