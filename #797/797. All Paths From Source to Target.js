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
