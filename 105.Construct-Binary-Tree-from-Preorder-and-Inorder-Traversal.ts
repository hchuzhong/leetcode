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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length) return null;
    const rootVal = preorder[0];
    const root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root;
    const index = inorder.findIndex(num => num === rootVal);
    if (index > 0) {
        root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    }
    if (index < inorder.length - 1) {
        root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    }
    return root;
};