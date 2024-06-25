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

function isSymmetric1(root: TreeNode | null): boolean {
    if (!root) return true;
    const dfs = (left: TreeNode | null, right: TreeNode | null) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    return dfs(root.left, root.right);
};

function isSymmetric2(root: TreeNode | null): boolean {
    if (!root || (!root.left && !root.right)) return true;
    if (!root.left || !root.right) return false;
    const queue: (TreeNode | null)[] = [root.left, root.right];
    while (queue.length) {
        const leftNode = queue.shift();
        const rightNode = queue.shift();
        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val !== rightNode.val) return false;
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
};