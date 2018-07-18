/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	/**
	 * 用 obj 或 Map() 的方式來計算每個元素出現了幾次
	 * 將陣列元素的值當作物件 obj 的 key ( obj[value] )
	 * obj 的 value 則為次數
	 */
	const freqs = nums.reduce((obj, value) => {
		obj[value] = obj[value] + 1 || 1;
		return obj;
	}, {});

	/**
	 * 用 freqs 新建一個 Object.keys()
	 * 並搭配 freqs 做排序
	 * 之後以 slice() 取到目標數量 k
	 * 再用 map() 整理新的陣列, 
	 * 因為Object.keys()的關係, 故用 Number(key) 傳入 key 
	 */
	return Object.keys(freqs)
		.sort((a, b) => freqs[b] - freqs[a])
		.slice(0, k)
		.map(key => Number(key));
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k));

/**
 * 別種
 */
// var topKFrequent = function(nums, k) {
//     var hash={}, res = [];
// 	nums.forEach(function(value){
// 	     hash[value]= ( hash[value]+1)|| 1;
// 	});
// 	Object.keys(hash).sort(function(a,b){return hash[b]-hash[a]})
// 	.slice(0,k)
// 	.forEach(function(x){
// 		res.push(parseInt(x));
// 	});
// 	return res;
// };

// var topKFrequent = function(nums, k) {
//     const freqs = nums.reduce((map, value) => {
//         if(map.has(value)) {
//             map.set(value, map.get(value) + 1)
//         } else {
//             map.set(value, 1)
//         }
//         return map;
//     }, new Map());

//     return Array
//         .from(freqs.entries())
//         .sort((entry1, entry2) => entry2[1] - entry1[1])
//         .slice(0,k)
//         .map(entry => entry[0])
// };
