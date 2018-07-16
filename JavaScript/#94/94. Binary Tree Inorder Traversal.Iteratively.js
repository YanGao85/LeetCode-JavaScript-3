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

 // 
var inorderTraversal = function(root) {
	let result = [];
	let stack = [];
	while (root !== null || stack.length > 0) {
		if (root === null) {
			root = stack.pop();
			result.push(root.val);
			root = root.right;
		} else {
			stack.push(root);
			root = root.left;
		}
	}
	return result;
};
