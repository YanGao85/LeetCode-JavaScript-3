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
// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

/**
 * 反轉二元樹
 */
/**
 * 和以前遍歷二元樹的方式一樣, 用遞迴.
 * 反轉的意思是 左 -> 右 , 右 -> 左 .
 * 
 * 解題思路是判斷當前 root 是否為 null,
 * 如果是, 就回傳 null.
 * 如果不是, 變開始反轉.
 * 建立一個 child 的子節點, 
 * 再將 child 的左右子樹做 invertTree 的遞迴後互換, 
 * 最後回傳 child .
 * 
 * ( 也可以只建立一個 tempLeft , 
 *   之後再將他做 invertTree 遞迴後放入 child.right , 
 *   但我喜歡這樣, 對我閱讀上更直覺一些 )
 */
var invertTree = function(root) {
	if (root !== null) {
		let child = new TreeNode(root.val);
		child.left = invertTree(root.right);
		child.right = invertTree(root.left);
		return child;
	}
	return null;
};

// console.log(invertTree(tree));
