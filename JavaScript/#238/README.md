# 238. Product of Array Except Self - 除了自身以外的陣列乘積

## Origin

### Problem

Given an array `nums` of n integers where _n_ > 1,  
return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

### Example

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

### Note

Please solve it **without division** and in O(_n_).

### Follow up

Could you solve it with constant space complexity?  
(The output array **does not** count as extra space for the purpose of space complexity analysis.)

---

## 翻譯

### 問題

給定一個整數 _n_ > 1 的陣列 `nums` ,  
回傳一個陣列 `output` , 且 `output[i]` 是等於 `nums` 裡每一個數除了 `nums[i]` 以外的乘積.

### 注意

請用沒有**除法**且時間複雜度 O(_n_) 的方式解決.  

### 後續
你可以滿足常數空間複雜度地解決嗎?  
(出於空間複雜度分析的目的, 輸出陣列**不會**被當作額外空間)