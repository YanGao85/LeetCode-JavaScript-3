/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * 使用遞迴, 去算出左和右的最深身度
 */
var maxDepth = function(root) {
	// 如果沒有, 就回傳 0
	if (root == null) return 0;
	// 每次深度加一
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
