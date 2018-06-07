# 804. Unique Morse Code Words

### Example
```
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
```
### Note
 - The length of words will be at most 100.
 - Each words[i] will have length in range [1, 12].
 - words[i] will only consist of lowercase letters.

### Question 
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,  
as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.  
  
For convenience, the full table for the 26 letters of the English alphabet is given below:
```javascript
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.  
For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-").  
We'll call such a concatenation, the transformation of a word.  
  
Return the number of different transformations among all words we have.  
  
### 翻譯 
#### Question 
國際摩斯密碼定義了一種標準的編碼,  
每一個字母會對應到一連串的點點和破折號.  
如下: "a" 代表 ".-", "b" 代表 "-...", "c" 代表 "-.-.", 以此類推.  

為方便起見, 完整26個英文字母的對應表如下:  
```javascript
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```
現在, 收到一個字詞列表, 每個單字可以寫成每個字母的摩斯密碼連結.  
譬如, "cab" 可以寫做 "-.-.-....-", (即是 "-.-." + "-..." + ".-" 的串聯).  
我們將這樣子的串聯稱做單字轉換.  

回傳所有單字可轉換成摩斯密碼的數量.

#### Note 
 - 字詞 words 的長度最多為100
 - 每個單字 words[i] 的長度的範圍為 [1, 12]
 - 單字 words[i] 只包含著小寫字母