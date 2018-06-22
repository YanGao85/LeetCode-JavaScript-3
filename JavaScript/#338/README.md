# 338. Counting Bits

### Question

Given a non negative integer number **num**.  
For every numbers **i** in the range **0 ≤ i ≤ num** calculate the number of 1's in their binary representation and return them as an array.

### Follow up

-   It is very easy to come up with a solution with run time **O(n\*sizeof(integer))**. But can you do it in linear time **O(n)** /possibly in a single pass?
-   Space complexity should be **O(n)**.
-   Can you do it like a boss? Do it without using any builtin function like **\_\_builtin_popcount** in c++ or in any other language.

### Example

```
For num = 5 you should return [0,1,1,2,1,2].
```

### 翻譯

#### Question 問題

給定一個非負整數 **num**.  
對於每個在 **0 ≤ i ≤ num** 的數字 **i** ,計算它們的二進制表示裡 1 的數量, 並以陣列回傳.

#### Follow up 進一步思考

-   這很容易想到運行時間是 **O(n\*sizeof(integer))** 的解法. 但你有辦法用線性時間 **O(n)** 的算法做一趟完成嗎?
-   空間複雜度應為 **O(n)**.
-   你有辦法做得像個老大? 不要使用如 c++ 裡的內建函數如 **\_\_builtin_popcount** , 或其他語言裡的.
