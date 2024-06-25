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

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true;
    const nodeArr: TreeNode[] = [];
    const dfs = (node: TreeNode | null) => {
        node.left && dfs(node.left);
        nodeArr.push(node);
        node.right && dfs(node.right);
    }
    dfs(root);
    for (let i = 0; i < nodeArr.length - 1; i++) {
        if (nodeArr[i].val >= nodeArr[i + 1].val) return false;
    }
    return true;
};