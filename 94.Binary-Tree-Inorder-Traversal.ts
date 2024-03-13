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

function inorderTraversal1(root: TreeNode | null): number[] {
    const result: number[] = [];
    const fn = (root: TreeNode | null) => {
        if (!root) return;
        fn(root.left);
        result.push(root.val);
        fn(root.right);
    }
    fn(root);
    return result;
};

function inorderTraversal2(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let tempNode = root;
    while (tempNode || stack.length) {
        while (tempNode) {
            stack.push(tempNode);
            tempNode = tempNode.left;
        }
        tempNode = stack.pop();
        result.push(tempNode.val);
        tempNode = tempNode.right;
    }
    return result;
};