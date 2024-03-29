/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return [];
    const arr = [root];
    const level = [];
    
    while (arr.length) {
        
        let len = arr.length;
        let sub = [];
        for (let i = 0; i < len; i ++) {
            let node = arr.shift();
            sub.push(node.val);
            
            node.left !== null && arr.push(node.left);
            node.right !== null && arr.push(node.right);
        }
        level.unshift(sub);  // 将每层入栈
    }
    return level;
};