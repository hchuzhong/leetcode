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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const result: number[][] = [[root.val]];
    let stack: TreeNode[] = [root];
    let levelStack: TreeNode[] = [];
    while (stack.length) {
        const curNode = stack.shift();
        if (curNode.left) levelStack.push(curNode.left);
        if (curNode.right) levelStack.push(curNode.right);
        if (stack.length === 0 && levelStack.length !== 0) {
            const levelResult = levelStack.map(node => node.val);
            result.push(levelResult);
            stack = levelStack;
            levelStack = [];
        }
    }
    return result;
};