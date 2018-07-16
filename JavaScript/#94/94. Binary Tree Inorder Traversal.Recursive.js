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

/**
 * 遞迴解法
 * 最後回傳 result
 */
var inorderTraversal = function(root) {
	var result = [];
	
	function inOrder(node) {
		if (node) {
			inOrder(node.left);
			result.push(node.val); 
			inOrder(node.right);
		}
	}
	inOrder(root);
	return result;
};
