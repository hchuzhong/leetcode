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

/**
    Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) return;
    const nodeArr: TreeNode[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        nodeArr.push(node);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    dfs(root);
    for (let i = 0; i < nodeArr.length - 1; i++) {
        nodeArr[i].right = nodeArr[i + 1];
        nodeArr[i].left = null;
    }
    nodeArr[nodeArr.length - 1].left = null;
};