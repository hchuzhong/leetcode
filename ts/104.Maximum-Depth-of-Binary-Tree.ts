class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxDepth1(root: TreeNode | null): number {
    if (!root) return 0;
    return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1;
};

function maxDepth2(root: TreeNode | null): number {
    if (!root) return 0;
    let queue: TreeNode[] = [];
    queue.push(root);
    let result = 0;
    while (queue.length) {
        const temp: TreeNode[] = [];
        for (let i = 0; i < queue.length; i++) {
            const curNode = queue[i];
            if (curNode.left) temp.push(curNode.left);
            if (curNode.right) temp.push(curNode.right);
        }
        queue = temp;
        result++;
    }
    return result;
};