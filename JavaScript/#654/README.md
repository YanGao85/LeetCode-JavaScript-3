
# [654. Maximum Binary Tree 最大二元樹][title]

[title]: https://leetcode.com/problems/maximum-binary-tree/description/

## ❀ Origin

### Problem

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

1.  The root is the maximum number in the array.
2.  The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3.  The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

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

---

## ❀ 翻譯

### 問題

給定一個不重複的整數陣列, 一個以此陣列建立的最大二元樹的定義如下:

1.  根節點為其陣列中的最大值
2.  左子樹是得出的最大值的左邊範圍所建構出的最大二元樹
3.  右子樹是得出的最大值的右邊範圍所建構出的最大二元樹

使用給定的陣列建構出最大二元樹, 並輸出該樹的根節點

### 注意

- 給定陣列的長度範圍為 1 ~ 1000 .

---
## ❀ Solution
### Idea
1.  建立抓最大值的 function
2.  建立產生最大二元樹的 function
3.  對其執行遞迴

### JavaScript
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 取得陣列最大值的位置
// arr.indexOf(Math.max(...arr));

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var arr = [3, 2, 1, 6, 0, 5];
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * 從 array 內, 自訂起始與結束位置,
 * 找出最大值的位置.
 * 為了每個節點要找 root 的位置時使用
 */
function getEachArrayMaxIndex(arrayNums, begin, end) {

	// slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）
	// 先建立一個目標範圍(左右子樹)的陣列
	var arrayClone = arrayNums.slice(begin, end + 1);

	// Math.max() 函式會回傳多個數字或陣列中的最大值
	// 再用 indexOf() , 找出該值再原陣列 arrayNums 中的位置
	return arrayNums.indexOf(Math.max(...arrayClone));
}

/**
 * 建立每個 MaxBinaryTree, 並執行遞迴 recursive 
 */
function createMaxBinaryTree(arrayNums, begin, end) {
	// 如果起始位大於結束位置, 一定找不到值, 故回傳 null 結束子樹
	if (begin > end) return null;

	// 從給定的陣列起始結束位置, 找出最大值的位置
	var indexMax = getEachArrayMaxIndex(arrayNums, begin, end);

	// 建立一個新的 BinaryTree , 並給其 root 的值為該目標陣列的最大值 arrayNums[indexMax]
	var BinaryTree = new TreeNode(arrayNums[indexMax]);
	
	//這個 BinaryTree 的左子樹, 等於以目標陣列的最大值的位置的左邊為目標陣列, 去建立新的 BinaryTree
	BinaryTree.left = createMaxBinaryTree(arrayNums, begin, indexMax - 1);

	// 同上, 右邊為右子樹
	BinaryTree.right = createMaxBinaryTree(arrayNums, indexMax + 1, end);

	// 回傳結果
	return BinaryTree;
}

var constructMaximumBinaryTree = function(nums) {
	// 回傳自定義的 createMaxBinaryTree() , 並把最初陣列與起始結束位置傳過去
	return createMaxBinaryTree(nums, 0, nums.length - 1);
};

//console.log(constructMaximumBinaryTree(arr));
```
### Execution
```javascript
//JavaScript

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
