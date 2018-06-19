/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 用遞迴去解,
// 類似倒過來想的 #654 (https://github.com/xTobu/LeetCode/tree/master/%23654)

var pruneTree = function(root) {
	// 如果傳入值 root 只會是 TreeNode ,
	// 所以此只判斷 root 是否為 null,
	// 若是 便直接回傳.
	if (!root) return root;

	// 對傳入值 root 的 left 要賦予一個新的 TreeNode ,
	// 而其 root 必須是目前傳入值的 root.left 的 val.
	root.left = pruneTree(root.left);

	// 同上
	root.right = pruneTree(root.right);

	// 因為前三行程式 ,
	// 所以會跑這邊的話, 代表至少到了該二元樹的最左邊的左子樹
	// (因為第二或三行的傳入值是 null, 而在他的 pruneTree 的第一行 root 是 null 便回傳了)
	// ===========================
	// 若 root.left === null && root.right === null , 代表該 root是最下面的了,
	// 如果 root.val === 0 , 則依題意, 刪除此節點 (賦予 null)
	// 如果 root.val 不等於  0 ,那一定是 1 , 則回傳此 root.
	return root.left === null && root.right === null && root.val === 0
		? null
		: root;
};
