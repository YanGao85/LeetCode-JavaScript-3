# 728. Self Dividing Numbers

### Question 
A *self-dividing number* is a number that is divisible by every digit it contains.  
For example, 128 is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.  
Also, a self-dividing number is not allowed to contain the digit zero.  
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.


### Note  
 - The boundaries of each input argument are `1 <= left <= right <= 10000`.  

### Example 1
```
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
```

  
### 翻譯
#### Question
自整除數 self-dividing number 是一種可以被自己所包含的所有位數整除的數.  
舉例, 128 就是一個自整除數, 因為`128 % 1 == 0`, `128 % 2 == 0`, `128 % 8 == 0` ( % 是相除取餘數)  
此外, 一個自整除數不允許有個位數是 0 .  
給定個較低的和較高的數作為邊界, 輸出的每個是自整除數的列表, 如果可能的話要包含邊界數.  

#### Note 
 - 作為邊界的每個輸入參數都是`1 <= left <= right <= 10000`.  
