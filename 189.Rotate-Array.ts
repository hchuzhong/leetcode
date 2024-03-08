/**
    Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    if (!k || nums.length === 1) return;
    while (k) {
        nums.splice(0, 0, nums.pop());
        k--;
    }
};