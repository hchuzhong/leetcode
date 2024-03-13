/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree1(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    const leftNode = root.left;
    root.left = root.right;
    root.right = leftNode;
    invertTree1(root.left);
    invertTree1(root.right);
    return root;
};

function invertTree2(root: TreeNode | null): TreeNode | null {
    if (!root) return root;
    const queue: TreeNode[] = [root];
    while (queue.length) {
        const curNode = queue.shift();
        const tempLeft = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tempLeft;
        curNode.left && queue.push(curNode.left);
        curNode.right && queue.push(curNode.right);
    }
    return root;
};