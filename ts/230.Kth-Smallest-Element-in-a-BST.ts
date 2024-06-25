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

function kthSmallest1(root: TreeNode | null, k: number): number {
    if (!root) return;
    const arr: TreeNode[] = [];
    const dfs = (node: TreeNode | null) => {
        if (node.left) dfs(node.left);
        arr.push(node);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    return arr[k - 1].val;
};

function kthSmallest2(root: TreeNode | null, k: number): number {
    if (!root) return;
    let result: number;
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        if (node.left) dfs(node.left);
        k--;
        if (k === 0) return result = node.val;
        if (node.right) dfs(node.right);
    }
    dfs(root);
    return result;
};