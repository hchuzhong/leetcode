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

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (!root) return result;
    let queue: TreeNode[] = [root];
    result.push(root.val);
    while (queue.length) {
        const temp: TreeNode[] = [];
        while (queue.length) {
            const curNode = queue.shift();
            curNode.right && temp.push(curNode.right);
            curNode.left && temp.push(curNode.left);
        }
        queue = temp;
        queue.length && result.push(queue[0].val);
    }
    return result;
};