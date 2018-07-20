
# [797. All Paths From Source to Target 從來源到目標的所有路徑][title]

[title]: https://leetcode.com/problems/all-paths-from-source-to-target/description/

## ❀ Origin

### Problem

Given a directed, acyclic graph of `N` nodes.  
Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  
the nodes are 0, 1, ..., graph.length - 1.  
graph[i] is a list of all nodes j for which the edge (i, j) exists.

### Note

- The number of nodes in the graph will be in the range [2, 15].
- You can print different paths in any order, but you should keep the order of nodes inside one path.

### Example 1

```
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
```

---

## ❀ 翻譯

### 問題

給定有`N`個節點的有向無環圖.  
找出所有從節點`0`到節點`N-1`的可行路徑, 並將它們找順序排列後回傳.

給定的圖表如下:  
節點的值會是 0, 1, ..., graph.length - 1.  
graph[i] 代表的是邊線 edge (i, j)上所有存在的 nodes j 的列表.

### 注意

- 圖中的節點的數量範圍將會在 [2, 15]
- 你可以用任何順序去印出不同的路徑, 但你應該保持節點在一個路徑內的順序.

---

## ❀ Solution

### 參考

- [DFS](http://blog.cocosdever.com/2018/03/14/LetCode-in-Swift-797-All-Paths-From-Source-to-Target/)

### Idea

底子太差, 一開始不會 DFS ( Depth-First Search 深度優先搜尋 ),
莫名其妙寫出來的, 忙完必須回頭確實弄懂.  
主概念是遍歷所有點, 並判斷是否為目標值後組成回傳陣列.

網路大神前輩說此題是典型 DFS + Backtracking 的題目

### JavaScript

```JavaScript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
/**
 * DFS：https://zhuanlan.zhihu.com/p/24986203
 */
var graph = [[1, 2, 3], [4], [],[4], []]

var allPathsSourceTarget = function(graph) {
	// 取得目標節點, 依題意目標節點為 有向無環圖 DAG 的長度 -1
	var N = graph.length;
	var nodeTarget = N - 1;

	// 建立拿來放結果, 最後會回傳的陣列
	var result = new Array();

	// 建立走遍每個點用的 function
	// 在裡面建是因為共用了 result
	var count =0
	function dfs(root, path) {

		// 依題意, 如果 root === target ,
		// 則代表該 path 是一種可能到達的方式,
		// 因此將其 push 到 result
		// 並不再尋找, 故 return
		if (root === nodeTarget) {
			result.push(path);
			return;
		}
		console.log('count',count);
		count++

		// 對 graph[root] 做 forEach, 要遍歷每個可能
		graph[root].forEach((item,index) => {
			// console.log('index',index);
			// console.log('root', root);
			// console.log('path', path);
			// console.log('item', item);
			// console.log(path.concat(item));

			// 因為上面有判斷目標的程式,
			// 故如果到這邊的話, 代表還沒找到目標, 必須繼續往下找
			// 所以目前將被 forEach 的 item 擺在 遞迴 dfs() 的 root,
			// path 則 concat 目前的 item 後, 傳進下個 dfs() 的 path.
			// 遍歷所有可能
			dfs(item, path.concat(item));
		});

		return result
	}

	// 回傳其結果值
	// 從 root = 0, path = [0] 的原點開始找
	return dfs(0, [0]);


};

console.log(allPathsSourceTarget(graph));
```

### Execution

```
Input: [[1, 2, 3], [4], [], [4], []]
nodeTarget: graph.length - 1 : 4

Start:
dfs(0, [0]) 從零開始
graph[root] = graph[0] = [1, 2, 3]
[1, 2, 3].forEach((item,index) => {
        // [1, 2, 3] 的第一次 forEach
        dfs(1, [0, 1]);
    });


then, next dfs
dfs(root, path) = dfs(1, [0, 1]);
graph[root] = graph[1] = [4]
[4].forEach((item,index) => {
        // 第一次 forEach
        // item = 4
        dfs(4, [0, 1, 4]);
    });


then, next dfs
dfs(root, path) = dfs(4, [0, 1, 4]);
root = 4
push to result [[0, 1, 4]]


======================================

then, second forEach
[1, 2, 3].forEach((item,index) => {
        // [1, 2, 3] 的第二次 forEach
        dfs(2, [0, 2]);
    });


then, next dfs
dfs(root, path) = dfs(2, [0, 2]);
graph[root] = graph[2] = []
[].forEach((item,index) => {
        // 空陣列, 代表此 path 不會到達目標節點
    });


======================================

then, third forEach
[1, 2, 3].forEach((item,index) => {
        // [1, 2, 3] 的第三次 forEach
        dfs(3, [0, 3]);
    });


then, next dfs
dfs(root, path) = dfs(3, [0, 3]);
graph[root] = graph[3] = [4]
[4].forEach((item,index) => {
        // 第一次 forEach
        // item = 4
        dfs(4, [0, 3, 4]);
    });


then, next dfs
dfs(root, path) = dfs(4, [0, 3, 4]);
root = 4
push to result [[0, 1, 4], [0, 3, 4]]


======================================

graph[0] 的可能性都跑完之後.
回傳結果: [[0, 1, 4],[0, 3, 4]]
```
