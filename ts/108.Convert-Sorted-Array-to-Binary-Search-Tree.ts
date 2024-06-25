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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const length = nums.length;
    if (!length) return null;
    const center = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[center]);
    if (center > 0) root.left = sortedArrayToBST(nums.slice(0, center));
    if (center < length - 1) root.right = sortedArrayToBST(nums.slice(center + 1));
    return root;
};