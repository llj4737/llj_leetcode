/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
    if (root == null) return [];  // 如果根节点为空，直接返回
    let arr = [root];  // 放入队列
    let level = [];
    while (arr.length) {
        let sub = [];
        let len = arr.length;
        for (let i = 0; i < len; i ++) {
            let c = arr.shift();   // 取出队列中的节点
            sub.push(c.val);    // 并将节点的值放进 层次数组 中
            if (c.left != null) {
                arr.push(c.left);   // 将节点的左右节点依次放进队列中
            }
            if (c.right != null) {
                arr.push(c.right);
            }
        }
        level.push(sub);   
        
    }
    return level;
};