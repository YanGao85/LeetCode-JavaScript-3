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
var inorderTraversal = function(root) {
	if (!root) return [];
	var stack = [];
	var number = [];
	while (stack.length !== 0 || root) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			root = stack.pop();
			number.push(root.val);
			root = root.right;
		}
	}
	return number;
};
