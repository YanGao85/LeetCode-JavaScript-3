/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	// 同樣的位置上如果沒重覆, 至少回傳一個節點
	if (!t1) return t2;
	if (!t2) return t1;

	// 建立一個新的 TreeNode, 其值為兩個樹的 val 相加
	var newBinaryTree = new TreeNode(t1.val + t2.val);

	// 開始遍歷每個節點, 賦予左子樹為一個新節點, 其值為兩個樹的左子樹的值相加
	newBinaryTree.left = mergeTrees(t1.left, t2.left);

	// 同上, 右子樹
	newBinaryTree.right = mergeTrees(t1.right, t2.right);

	return newBinaryTree;
};
