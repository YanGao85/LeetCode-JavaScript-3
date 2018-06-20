/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 取得陣列最大值的位置
// arr.indexOf(Math.max(...arr));

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var arr = [3, 2, 1, 6, 0, 5];
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * 從 array 內, 自訂起始與結束位置,
 * 找出最大值的位置.
 * 為了每個節點要找 root 的位置時使用
 */
function getEachArrayMaxIndex(arrayNums, begin, end) {

	// slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）
	// 先建立一個目標範圍(左右子樹)的陣列
	var arrayClone = arrayNums.slice(begin, end + 1);

	// Math.max() 函式會回傳多個數字或陣列中的最大值
	// 再用 indexOf() , 找出該值再原陣列 arrayNums 中的位置
	return arrayNums.indexOf(Math.max(...arrayClone));
}

/**
 * 建立每個 MaxBinaryTree, 並執行遞迴 recursive 
 */
function createMaxBinaryTree(arrayNums, begin, end) {
	// 如果起始位大於結束位置, 一定找不到值, 故回傳 null 結束子樹
	if (begin > end) return null;

	// 從給定的陣列起始結束位置, 找出最大值的位置
	var indexMax = getEachArrayMaxIndex(arrayNums, begin, end);

	// 建立一個新的 BinaryTree , 並給其 root 的值為該目標陣列的最大值 arrayNums[indexMax]
	var BinaryTree = new TreeNode(arrayNums[indexMax]);
	
	//這個 BinaryTree 的左子樹, 等於以目標陣列的最大值的位置的左邊為目標陣列, 去建立新的 BinaryTree
	BinaryTree.left = createMaxBinaryTree(arrayNums, begin, indexMax - 1);

	// 同上, 右邊為右子樹
	BinaryTree.right = createMaxBinaryTree(arrayNums, indexMax + 1, end);

	// 回傳結果
	return BinaryTree;
}

var constructMaximumBinaryTree = function(nums) {
	// 回傳自定義的 createMaxBinaryTree() , 並把最初陣列與起始結束位置傳過去
	return createMaxBinaryTree(nums, 0, nums.length - 1);
};

//console.log(constructMaximumBinaryTree(arr));
