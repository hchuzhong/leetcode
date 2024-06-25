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

function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixMap = {};
    prefixMap[0] = 1;
    const recur = (node: TreeNode | null, curSum: number) => {
        if (!node) return 0;
        let res = 0;
        curSum += node.val;

        res += (prefixMap[curSum - targetSum] ?? 0);
        if (!prefixMap[curSum]) prefixMap[curSum] = 0;
        prefixMap[curSum]++;

        const left = recur(node.left, curSum);
        const right = recur(node.right, curSum);
        res = res + left + right;
        prefixMap[curSum]--;
        return res;
    }
    return recur(root, 0);
};