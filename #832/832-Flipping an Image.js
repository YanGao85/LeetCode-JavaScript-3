/**
 * @param {number[][]} A // [[1,1,0],[1,0,1],[0,0,0]]
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	/** 對 A 做 map.() */
	const result = A.map(function(element) {
		/** 先將其每一個的元素, 即每一個陣列做 .reverse(), 以完成圖片的水平翻轉.
		 *	之後再將處理過的陣列做 map.(). */
		return element.reverse().map(function(val) {
			/** 將其值做 0 與 1 的反轉計算, 以完成圖片反轉. */
			return val == 0 ? 1 : 0;
		});
	});
	return result; //[[1,0,0],[0,1,0],[1,1,1]]
};
