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
function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;
    if (!root) return result;
    const maxDepth = (root: TreeNode | null): number => {
        if (!root) return 0;
        const left = maxDepth(root.left), right = maxDepth(root.right);
        result = Math.max(result, left + right);
        return Math.max(left, right) + 1;
    };
    maxDepth(root)
    return result;
};