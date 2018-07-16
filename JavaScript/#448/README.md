# 283. Move Zeroes - 移動零

## Origin

### Question

Given an array of integers where 1 ≤ a[i] ≤ *n* (_n_ = size of array),  
some elements appear twice and others appear once.

Find all the elements of [1, *n*] inclusive that do not appear in this array.

Could you do it without extra space and in O(_n_) runtime?  
You may assume the returned list does not count as extra space.

### Example

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

---

## 翻譯

### 問題
給定一個整數陣列, 其中值的範圍在 1 ≤ a[i] ≤ *n* (_n_ 等於陣列長度),  
有些元素出現兩次, 其他則出現一次.  
  
找出所有包含在 [1, *n*] 裡但沒有出現在這個陣列裡的所有元素.  
  
你可以做到沒有額外空間並且時間複雜度為 O(_n_) 嗎?  
你可以認為那個回傳答案的陣列不算入額外空間.  