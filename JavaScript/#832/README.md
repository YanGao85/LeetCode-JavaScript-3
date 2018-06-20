# 832. Flipping an Image

### Question 
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.  
To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].  
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].  

### Example
```
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
```
### Example 2
```
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
```
### Note
 - 1 <= A.length = A[0].length <= 20
 - 0 <= A[i][j] <= 1  

  
### 翻譯
#### Question
給定一個二進制矩陣 A, 我們想要將圖片水平翻轉, 並反轉它, 之後回傳結果圖片.  
想要水平翻轉意味著圖片的每一行都要相反. 
舉例, 水平翻轉 [1, 1, 0] 的結果為 [0, 1, 1].
想要反轉意味著每個 0 都要被取代成 1, 每個 1 都要被取代成 0.  
舉例, 反轉 [0, 1, 1] 的結果為 [1, 0, 0].


#### Note 
 - A 是二進制矩陣, 因此 A 的長度和 A[0] 的長度相等, 且範圍為 1 ~ 20 之間.
 - A 是二進制矩陣, 因此每一個值不是 0 就是 1.