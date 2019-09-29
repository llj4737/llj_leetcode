/**
 * 给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 
 * 将二叉树前序遍历， 存入数组中， 然后遍历数组， root.right = arr[i], root.left = null,
 *  当前指针往后移, 循环结束在把当前指针指向头节点
 * 
 */
var flatten = function(root) {
    let arr = [];
    rec(root, arr);
    let head = root;
    for (let i = 1; i < arr.length; i ++) {
        root.right = arr[i];
        root.left = null;
        root = root.right;
    }
    root = head;
};

function rec(root, arr) {
    if (root === null) {
        return;
    }
    arr.push(root);
    rec(root.left, arr);
    rec(root.right, arr);
}