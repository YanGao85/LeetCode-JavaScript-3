/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 二元樹迭代遍歷, 搭配 stack 堆疊
// 參考：https://www.jianshu.com/p/456af5480cee
var inorderTraversal = function(root) {
	let result = [];
	let stack = [];
	// 判斷root樹是否為 null, 或是 stack 的長度大於 0
	while (root !== null || stack.length > 0) {
		if (root) {
			/**
			 * 如果該樹 root 不是空值,
			 * 便將 root 推入 stack ,
			 * 將原本的 root 賦值 root.left,
			 * 繼續 while
			 */
			stack.push(root);
			root = root.left;
		} else {
			/**
			 * 如果進來這裡,
			 * 代表 root 沒有值,但stack.length > 0
			 * 也就是說這裡是最左邊
			 * 於是用 root = stack.pop();
			 * 將 root 改成 stack 的最後一個元素, 並將 stack 的最後一個元素刪除
			 * 之後將當下 root 值推到結果陣列 result , 即為中序遍歷的左子樹優先原則
			 * 推完 result.push(root.val); 後
			 * 再將 root = root.right;
			 * 繼續 while
			 * 繼續 從左子樹開始找
			 */
			root = stack.pop();
			result.push(root.val);
			root = root.right;
		}
	}
	return result;
};
