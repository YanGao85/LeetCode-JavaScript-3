# 461. Hamming Distance

### Question 
The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.  

Given two integers x and y, calculate the Hamming distance.  

### Note  
 - 0 ≤ x, y < 2<sup>31</sup>.

### Example
```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```


  
### 翻譯
#### Question
兩個數的漢明距離是相對應的 bits 位置有所不同的數量.
#### Note 
 - 0 ≤ x, y < 2<sup>31</sup>. 

### 備註
#### 程式怎麼跑 不記起來會忘記
 1. 用 互斥或閘(XOR) 算出兩數的差異數的十進位值
 2. 用 while(){} 算出該數的二進位制有幾個 1 

```javascript
5 ^ 10 = 15
 5   (0 1 0 1)
10   (1 0 1 0)
      ↑ ↑ ↑ ↑
--------------
15   (1 1 1 1)

=================
1. 
n = 15
count = 1

15   (1 1 1 1)
14   (1 1 1 0)
      ↑ ↑ ↑ ↑
--------------
14   (1 1 1 0)
=================
2.
n = 14
count = 2

14   (1 1 1 0)
13   (1 1 0 1)
      ↑ ↑ ↑ ↑
--------------
12   (1 1 0 0)

=================
3.
n = 12
count = 3

12   (1 1 0 0)
11   (1 0 1 1)
      ↑ ↑ ↑ ↑
--------------
 8   (1 0 0 0)

=================
4.
n = 8
count = 4

 8   (1 0 0 0)
 7   (0 1 1 1)
      ↑ ↑ ↑ ↑
--------------
 0   (0 0 0 0)

=================
5.
n = 0
count = 4
回傳 count

```

