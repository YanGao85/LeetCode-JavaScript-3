/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 陣列最大值的位置
// var i = arr.indexOf(Math.max(...arr));

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var num = [3, 2, 1, 6, 0, 5];
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
function getEachArrayMaxIndex(nums, begin, end){
    let ret = begin;  
    for(let i=begin+1; i<=end; i++){  
        if(nums[begin] < nums[i]){  
            ret = i;  
        }  
    }  
    return ret;  
}
function createMaxBinaryTree(nums, begin, end){
	
    if(begin > end)
        return null
    var maxIndex = getEachArrayMaxIndex(nums, begin, end)
	var BinaryTree = new TreeNode(nums[maxIndex])
	BinaryTree.left = createMaxBinaryTree(nums,begin,maxIndex-1)
	BinaryTree.right = createMaxBinaryTree(nums,maxIndex+1, end);   
	return BinaryTree
}

var constructMaximumBinaryTree = function(nums) {
    return createMaxBinaryTree(nums, 0, nums.length-1);  
};
//constructMaximumBinaryTree(num)
console.log(constructMaximumBinaryTree(num));
