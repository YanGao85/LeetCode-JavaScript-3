# 807. Max Increase to Keep City Skyline

### Question 
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there.  
We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings).  
Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid,  
i.e. top, bottom, left, and right, must be the same as the skyline of the original grid.  
A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

### Example
```
Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
```
### Note
 - 1 < grid.length = grid[0].length <= 50.
 - All heights grid[i][j] are in the range [0, 100].
 - All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.

  
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